using HRDesk.Services.Models;
using HRDesk.Services.ServiceInterfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HRDesk.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class MeetingController : Controller
    {
        private IMeetingService _meetingService;
        public MeetingController(IMeetingService meetingService)
        {
            _meetingService = meetingService;
        }

        [Authorize]
        [HttpGet("getAllMeetings")]
        public ActionResult<List<MeetingModel>> GetAllMeetings()
        {
            return _meetingService.GetAllMeetings();
        }

        [Authorize]
        [HttpPost("addMeeting")]
        public async Task<MeetingModel> AddMeeting([FromBody] MeetingModel meetingModel)
        {
            return await _meetingService.AddMeeting(meetingModel);
        }

        [Authorize]
        [HttpPost("deleteMeeting/{id}")]
        public async Task<IActionResult> DeleteMeeting(int id)
        {
            await _meetingService.DeleteMeeting(id);
            return Ok();
        }

        [Authorize]
        [HttpPut("update")]
        public async Task<MeetingModel> UpdateMeeting([FromBody] MeetingModel meetingModel)
        {
            return await _meetingService.UpdateMeeting(meetingModel);
        }
    }
}

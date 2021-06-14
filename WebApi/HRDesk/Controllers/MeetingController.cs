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
        private IIdentityService _identityService;
        public MeetingController(IMeetingService meetingService, IIdentityService identityService)
        {
            _meetingService = meetingService;
            _identityService = identityService;
        }

        [Authorize]
        [HttpGet("getAllMeetings")]
        public ActionResult<List<MeetingModel>> GetAllMeetings()
        {
            return _meetingService.GetAllMeetings();
        }

        [Authorize]
        [HttpPost("getAllMeetingsBetweenRange")]
        public ActionResult<List<MeetingModel>> GetAllMeetingsBetweenRange([FromBody] MeetingRangeRequest meetingRangeRequest)
        {
            var userId = _identityService.GetUserId();
            return _meetingService.GetAllMeetingsBetweenRange(meetingRangeRequest, userId.Value);
        }

        [Authorize]
        [HttpGet("getUpcomingMeetings")]
        public ActionResult<List<MeetingModel>> GetUpcomingMeetings()
        {
            var userId = _identityService.GetUserId();
            return _meetingService.GetUpcoming10Meetings(userId.Value);
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

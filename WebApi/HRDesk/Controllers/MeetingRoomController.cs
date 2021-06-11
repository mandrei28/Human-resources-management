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
    public class MeetingRoomController : Controller
    {
        private IMeetingRoomService _meetingRoomService;
        public MeetingRoomController(IMeetingRoomService meetingRoomService)
        {
            _meetingRoomService = meetingRoomService;
        }

        [Authorize]
        [HttpGet("getAllMeetingRooms")]
        public ActionResult<List<MeetingRoomModel>> GetAllMeetingRooms()
        {
            return _meetingRoomService.GetAllMeetingRooms();
        }

        [Authorize]
        [HttpPost("addMeetingRoom")]
        public async Task<MeetingRoomModel> AddMeetingRoom([FromBody] MeetingRoomModel meetingRoomModel)
        {
            return await _meetingRoomService.AddMeetingRoom(meetingRoomModel);
        }

        [Authorize]
        [HttpPost("deleteMeetingRoom/{id}")]
        public async Task<IActionResult> DeleteMeetingRoom(int id)
        {
            await _meetingRoomService.DeleteMeetingRoom(id);
            return Ok();
        }

        [Authorize]
        [HttpPut("update")]
        public async Task UpdateMeetingRoom([FromBody] MeetingRoomModel MeetingRoomModel)
        {
            await _meetingRoomService.UpdateMeetingRoom(MeetingRoomModel);
        }
    }
}

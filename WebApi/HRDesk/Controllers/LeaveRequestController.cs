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
    public class LeaveRequestController : Controller
    {
        private ILeaveRequestService _leaveRequestService;
        private IIdentityService _identityService;
        public LeaveRequestController(ILeaveRequestService leaveRequestService, IIdentityService identityService)
        {
            _leaveRequestService = leaveRequestService;
            _identityService = identityService;
        }

        [Authorize]
        [HttpGet("getAllLeaveRequests")]
        public ActionResult<List<LeaveRequestModel>> GetAllLeaveRequests()
        {
            var userId = _identityService.GetUserId();
            return _leaveRequestService.GetAllAdminLeaveRequests(userId.Value);
        }

        [Authorize]
        [HttpGet("getAllUserLeaveRequests")]
        public ActionResult<List<LeaveRequestModel>> GetAllUserLeaveRequests()
        {
            var userId = _identityService.GetUserId();
            return _leaveRequestService.GetAllUserLeaveRequests(userId.Value);
        }

        [Authorize]
        [HttpPost("addLeaveRequest")]
        public async Task<LeaveRequestModel> AddLeaveRequest([FromBody] LeaveRequestModel leaveRequestModel)
        {
            var userId = _identityService.GetUserId();
            return await _leaveRequestService.AddLeaveRequest(leaveRequestModel, userId.Value);
        }

        [Authorize]
        [HttpPut("approve/{leaveRequestId}")]
        public async Task<ActionResult<LeaveRequestModel>> ApproveLeaveRequest(int leaveRequestId, [FromBody] int newStatus)
        {
            var userId = _identityService.GetUserId();
            return await _leaveRequestService.AcceptLeaveRequest(leaveRequestId, newStatus, userId.Value);
        }

        [Authorize]
        [HttpPost("deleteLeaveRequest/{id}")]
        public async Task<IActionResult> DeleteLeaveRequest(int id)
        {
            await _leaveRequestService.DeleteLeaveRequest(id);
            return Ok();
        }
    }
}

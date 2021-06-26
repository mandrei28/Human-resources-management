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
    public class HardwareRequestController : Controller
    {
        private IHardwareRequestService _hardwareRequestService;
        private IIdentityService _identityService;
        public HardwareRequestController(IHardwareRequestService hardwareRequestService, IIdentityService identityService)
        {
            _hardwareRequestService = hardwareRequestService;
            _identityService = identityService;
        }

        [Authorize]
        [HttpGet("getAllHardwareRequests")]
        public ActionResult<List<HardwareRequestModel>> GetAllHardwareRequests()
        {
            return _hardwareRequestService.GetAllAdminHardwareRequests();
        }

        [Authorize]
        [HttpGet("getAllUserHardwareRequests")]
        public ActionResult<List<HardwareRequestModel>> GetAllUserHardwareRequests()
        {
            var userId = _identityService.GetUserId();
            return _hardwareRequestService.GetAllUserHardwareRequests(userId.Value);
        }

        [Authorize]
        [HttpPost("addHardwareRequest")]
        public async Task<HardwareRequestModel> AddHardwareRequest([FromBody] HardwareRequestModel hardwareRequestModel)
        {
            var userId = _identityService.GetUserId();
            return await _hardwareRequestService.AddHardwareRequest(hardwareRequestModel, userId.Value);
        }

        [Authorize]
        [HttpPut("approve/{hardwareRequestId}")]
        public async Task<ActionResult<HardwareRequestModel>> ApproveHardwareRequest(int hardwareRequestId, [FromBody] int newStatus)
        {
            var userId = _identityService.GetUserId();
            return await _hardwareRequestService.AcceptHardwareRequest(hardwareRequestId, newStatus, userId.Value);
        }

        [Authorize]
        [HttpPost("deleteHardwareRequest/{id}")]
        public async Task<IActionResult> DeleteHardwareRequest(int id)
        {
            await _hardwareRequestService.DeleteHardwareRequest(id);
            return Ok();
        }
    }
}

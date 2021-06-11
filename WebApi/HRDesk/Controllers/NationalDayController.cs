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
    public class NationalDayController : Controller
    {
        private INationalDayService _nationalDayService;
        public NationalDayController(INationalDayService nationalDayService)
        {
            _nationalDayService = nationalDayService;
        }

        [Authorize]
        [HttpGet("getAllNationalDays")]
        public ActionResult<List<NationalDayModel>> GetAllNationalDays()
        {
            return _nationalDayService.GetAllNationalDays();
        }

        [Authorize]
        [HttpPost("addNationalDay")]
        public async Task<NationalDayModel> AddNationalDay([FromBody] NationalDayModel nationalDayModel)
        {
            return await _nationalDayService.AddNationalDay(nationalDayModel);
        }

        [Authorize]
        [HttpPost("deleteNationalDay/{id}")]
        public async Task<IActionResult> DeleteNationalDay(int id)
        {
            await _nationalDayService.DeleteNationalDay(id);
            return Ok();
        }

        [Authorize]
        [HttpPut("update")]
        public async Task<NationalDayModel> UpdateNationalDay([FromBody] NationalDayModel NationalDayModel)
        {
            return await _nationalDayService.UpdateNationalDay(NationalDayModel);
        }
    }
}

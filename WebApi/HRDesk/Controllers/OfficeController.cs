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
    public class OfficeController : Controller
    {
        private IOfficeService _officeService;
        public OfficeController(IOfficeService officeService)
        {
            _officeService = officeService;
        }

        [Authorize]
        [HttpGet("getAllOffices")]
        public ActionResult<List<OfficeModel>> GetAllOffices()
        {
            return _officeService.GetAllOffices();
        }

        [Authorize]
        [HttpPost("addOffice")]
        public async Task<OfficeModel> AddOffice([FromBody] OfficeModel officeModel)
        {
            return await _officeService.AddOffice(officeModel);
        }

        [Authorize]
        [HttpPost("deleteOffice/{id}")]
        public async Task<IActionResult> DeleteOffice(int id)
        {
            await _officeService.DeleteOffice(id);
            return Ok();
        }

        [Authorize]
        [HttpPut("update")]
        public async Task UpdateOffice([FromBody] OfficeModel OfficeModel)
        {
            await _officeService.UpdateOffice(OfficeModel);
        }
    }
}

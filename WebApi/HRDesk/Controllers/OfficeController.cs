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
    }
}

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
    public class FunctionController : Controller
    {
        private IFunctionService _functionService;
        public FunctionController(IFunctionService functionService)
        {
            _functionService = functionService;
        }

        [Authorize]
        [HttpGet("getAllFunctions")]
        public ActionResult<List<FunctionModel>> GetAllFunctions()
        {
            return _functionService.GetAllFunctions();
        }
    }
}

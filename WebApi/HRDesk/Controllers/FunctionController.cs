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

        [Authorize]
        [HttpPost("addFunction")]
        public async Task<FunctionModel> AddFunction([FromBody] FunctionModel functionModel)
        {
            return await _functionService.AddFunction(functionModel);
        }

        [Authorize]
        [HttpPost("deleteFunction/{id}")]
        public async Task<IActionResult> DeleteFunction(int id)
        {
            await _functionService.DeleteFunction(id);
            return Ok();
        }

        [Authorize]
        [HttpPut("update")]
        public async Task UpdateFunction([FromBody] FunctionModel functionModel)
        {
            await _functionService.UpdateFunction(functionModel);
        }
    }
}

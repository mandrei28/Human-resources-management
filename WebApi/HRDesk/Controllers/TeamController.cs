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
    public class TeamController : Controller
    {
        private ITeamService _teamService;
        public TeamController(ITeamService teamService)
        {
            _teamService = teamService;
        }

        [Authorize]
        [HttpGet("getAllTeams")]
        public ActionResult<List<TeamModel>> GetAllTeams()
        {
            return _teamService.GetAllTeams();
        }
    }
}

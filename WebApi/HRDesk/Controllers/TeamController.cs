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

        [Authorize]
        [HttpGet("getAllBookingTeams")]
        public ActionResult<List<MeetingComponentModel>> GetAllBookingTeams()
        {
            return _teamService.GetBookingTeams();
        }

        [Authorize]
        [HttpPost("addTeam")]
        public async Task<TeamModel> AddFunction([FromBody] TeamModel teamModel)
        {
            return await _teamService.AddTeam(teamModel);
        }

        [Authorize]
        [HttpPost("deleteTeam/{id}")]
        public async Task<IActionResult> DeleteTeam(int id)
        {
            await _teamService.DeleteTeam(id);
            return Ok();
        }

        [Authorize]
        [HttpPut("update")]
        public async Task UpdateTeam([FromBody] TeamModel teamModel)
        {
            await _teamService.UpdateTeam(teamModel);
        }
    }
}

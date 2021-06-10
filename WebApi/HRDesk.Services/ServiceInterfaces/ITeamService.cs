using HRDesk.Services.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace HRDesk.Services.ServiceInterfaces
{
    public interface ITeamService
    {
        List<TeamModel> GetAllTeams();
        Task<TeamModel> AddTeam(TeamModel teamModel);
        Task DeleteTeam(int teamId);
        Task UpdateTeam(TeamModel teamModel);
    }
}

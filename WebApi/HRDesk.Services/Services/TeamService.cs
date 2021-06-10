using HRDesk.Infrastructure.RepositoryInterfaces;
using HRDesk.Services.Mappers;
using HRDesk.Services.Models;
using HRDesk.Services.ServiceInterfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRDesk.Services.Services
{
    public class TeamService : ITeamService
    {
        private IUnitOfWork _unitOfWork;

        public TeamService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public List<TeamModel> GetAllTeams()
        {
            var teams = _unitOfWork.Teams.GetAll();
            var teamModels = teams.Select(team => TeamMapper.ToTeamModel(team)).ToList();
            return teamModels;
        }

        public async Task<TeamModel> AddTeam(TeamModel teamModel)
        {
            var team = TeamMapper.ToTeam(teamModel);
            await _unitOfWork.Teams.InsertAsync(team);
            await _unitOfWork.CommitAsync();
            teamModel.Id = team.Id;
            teamModel.CreationDate = team.CreatedDate.Date.ToString("dd/MM/yyyy");
            return teamModel;
        }

        public async Task DeleteTeam(int teamId)
        {
            var team = await _unitOfWork.Teams.GetByIDAsync(teamId);
            _unitOfWork.Teams.Delete(team);
            await _unitOfWork.CommitAsync();
        }

        public async Task UpdateTeam(TeamModel teamModel)
        {
            var team = await _unitOfWork.Teams.GetByIDAsync(teamModel.Id);
            var updatedTeam = TeamMapper.UpdateTeam(team, teamModel);
            _unitOfWork.Teams.Update(updatedTeam);
            await _unitOfWork.CommitAsync();
        }
    }
}

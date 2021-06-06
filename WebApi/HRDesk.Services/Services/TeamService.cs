using HRDesk.Infrastructure.RepositoryInterfaces;
using HRDesk.Services.Mappers;
using HRDesk.Services.Models;
using HRDesk.Services.ServiceInterfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

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
    }
}

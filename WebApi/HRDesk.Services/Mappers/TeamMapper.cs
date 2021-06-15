using HRDesk.Infrastructure.Entities;
using HRDesk.Services.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace HRDesk.Services.Mappers
{
    public class TeamMapper
    {
        public static TeamModel ToTeamModel(Team team)
        {
            return new TeamModel()
            {
                Id = team.Id,
                Name = team.Name,
                Description = team.Description,
                CreationDate = team.CreatedDate,
                Predefined = team.Predefined,
            };
        }

        public static Team ToTeam(TeamModel teamModel)
        {
            return new Team()
            {
                // Id = teamModel.Id,
                Name = teamModel.Name,
                Description = teamModel.Description,
            };
        }

        public static Team UpdateTeam(Team team, TeamModel teamModel)
        {
            team.Name = teamModel.Name;
            team.Description = teamModel.Description;
            return team;
        }
    }
}

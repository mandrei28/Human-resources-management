﻿using HRDesk.Services.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace HRDesk.Services.ServiceInterfaces
{
    public interface ITeamService
    {
        List<TeamModel> GetAllTeams();
    }
}

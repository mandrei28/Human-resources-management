using HRDesk.Infrastructure.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace HRDesk.Infrastructure.RepositoryInterfaces
{
    public interface IDayoffRepository : IBaseRepository<Dayoff>
    {
        IQueryable<Dayoff> GetAllByAdminId(int adminId);
        IQueryable<Dayoff> GetAllByUserTeamId(int teamId);
        IQueryable<Dayoff> GetAllByUserId(int userId);
        IQueryable<Dayoff> GetAllApprovedForUserByYear(int userId, int year);
    }
}

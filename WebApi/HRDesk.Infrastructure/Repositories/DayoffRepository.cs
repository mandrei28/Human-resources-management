using HRDesk.Infrastructure.Entities;
using HRDesk.Infrastructure.Enums;
using HRDesk.Infrastructure.RepositoryInterfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace HRDesk.Infrastructure.Repositories
{
    public class DayoffRepository : BaseRepository<Dayoff>, IDayoffRepository
    {
        public DayoffRepository(HRDeskDbContext dbContext) : base(dbContext)
        {

        }

        public IQueryable<Dayoff> GetAllByAdminId(int adminId)
        {
            return GetAll().OrderByDescending(a => a.Status == RequestStatus.Waiting).Include(a => a.Admin).Include(a => a.User).Where(a => a.AdminId == adminId && !a.IsDeleted);
        }

        public IQueryable<Dayoff> GetAllByUserId(int userId)
        {
            return GetAll().OrderByDescending(a => a.Status == RequestStatus.Waiting).Include(a => a.Admin).Include(a => a.User).Where(a => a.UserId == userId && !a.IsDeleted);
        }

        public IQueryable<Dayoff> GetAllByUserTeamId(int teamId)
        {
            return GetAll().Include(d => d.User).Where(d => d.User.TeamId == teamId && d.Status == RequestStatus.Approved);
        }

        public IQueryable<Dayoff> GetAllApprovedForUserByYear(int userId, int year)
        {
            return GetAll().Include(a => a.Admin).Include(a => a.User).Where(a => a.UserId == userId && !a.IsDeleted && a.Status == RequestStatus.Approved && a.StartDate.Year == year);
        }
    }
}

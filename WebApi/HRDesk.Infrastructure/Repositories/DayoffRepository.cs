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
            return GetAll().OrderByDescending(a => a.Status == RequestStatus.Waiting)
                .Include(a => a.Admin).ThenInclude(a => a.CompanyDetails)
                .Include(a => a.Admin).ThenInclude(a => a.PersonalDetails)
                .Include(a => a.User).ThenInclude(a => a.CompanyDetails)
                .Include(a => a.User).ThenInclude(a => a.PersonalDetails)
                .Where(a => a.AdminId == adminId && !a.IsDeleted);
        }

        public IQueryable<Dayoff> GetAllByUserId(int userId)
        {
            return GetAll().OrderByDescending(a => a.Status == RequestStatus.Waiting)
                .Include(a => a.Admin).ThenInclude(a => a.CompanyDetails)
                .Include(a => a.Admin).ThenInclude(a => a.PersonalDetails)
                .Include(a => a.User).ThenInclude(a => a.CompanyDetails)
                .Include(a => a.User).ThenInclude(a => a.PersonalDetails)
                .Where(a => a.UserId == userId && !a.IsDeleted);
        }

        public IQueryable<Dayoff> GetAllByUserTeamId(int teamId)
        {
            return GetAll()
                .Include(a => a.User).ThenInclude(a => a.CompanyDetails)
                .Include(a => a.User).ThenInclude(a => a.PersonalDetails)
                .Where(d => d.User.TeamId == teamId && d.Status == RequestStatus.Approved);
        }

        public IQueryable<Dayoff> GetAllApprovedForUserByYear(int userId, int year)
        {
            return GetAll()
                .Include(a => a.Admin).ThenInclude(a => a.CompanyDetails)
                .Include(a => a.Admin).ThenInclude(a => a.PersonalDetails)
                .Include(a => a.User).ThenInclude(a => a.CompanyDetails)
                .Include(a => a.User).ThenInclude(a => a.PersonalDetails)
                .Where(a => a.UserId == userId && !a.IsDeleted && a.Status == RequestStatus.Approved && a.StartDate.Year == year);
        }

        public Dayoff GetById(int dayoffId)
        {
            return GetAll()
                .Include(d => d.User).ThenInclude(u => u.PersonalDetails)
                .Include(u => u.User).ThenInclude(u => u.CompanyDetails)
                .Include(d => d.Admin).ThenInclude(u => u.PersonalDetails)
                .Include(u => u.Admin).ThenInclude(u => u.CompanyDetails)
                .FirstOrDefault(d => d.Id == dayoffId);
        }
    }
}

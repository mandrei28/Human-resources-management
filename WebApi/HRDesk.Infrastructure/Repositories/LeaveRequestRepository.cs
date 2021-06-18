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
    public class LeaveRequestRepository : BaseRepository<LeaveRequest>, ILeaveRequestRepository
    {
        public LeaveRequestRepository(HRDeskDbContext dbContext) : base(dbContext)
        {

        }

        public IQueryable<LeaveRequest> GetAllByAdminId(int adminId)
        {
            return GetAll().OrderByDescending(a => a.Status == RequestStatus.Waiting)
                .Include(a => a.Admin).ThenInclude(a => a.CompanyDetails)
                .Include(a => a.Admin).ThenInclude(a => a.PersonalDetails)
                .Include(a => a.User).ThenInclude(a => a.CompanyDetails)
                .Include(a => a.User).ThenInclude(a => a.PersonalDetails)
                .Where(a => a.AdminId == adminId && !a.IsDeleted);
        }

        public IQueryable<LeaveRequest> GetAllByUserId(int userId)
        {
            var date = DateTime.Now.AddDays(-5);
            return GetAll()
                .OrderByDescending(a => a.Status == RequestStatus.Waiting).ThenBy(a => a.StartDate)
                .Include(a => a.Admin).ThenInclude(a => a.CompanyDetails)
                .Include(a => a.Admin).ThenInclude(a => a.PersonalDetails)
                .Include(a => a.User).ThenInclude(a => a.CompanyDetails)
                .Include(a => a.User).ThenInclude(a => a.PersonalDetails)
                .Where(a => a.AdminId == userId && a.StartDate > date && !a.IsDeleted);
        }
    }
}

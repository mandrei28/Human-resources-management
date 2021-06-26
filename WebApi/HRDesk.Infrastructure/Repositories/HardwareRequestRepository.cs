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
    public class HardwareRequestRepository : BaseRepository<HardwareRequest>, IHardwareRequestRepository
    {
        public HardwareRequestRepository(HRDeskDbContext dbContext) : base(dbContext)
        {

        }

        public IQueryable<HardwareRequest> GetAllHardwareRequests()
        {
            return GetAll().OrderByDescending(a => a.Status == RequestStatus.Waiting)
                .Include(a => a.Admin).ThenInclude(a => a.CompanyDetails)
                .Include(a => a.Admin).ThenInclude(a => a.PersonalDetails)
                .Include(a => a.User).ThenInclude(a => a.CompanyDetails)
                .Include(a => a.User).ThenInclude(a => a.PersonalDetails)
                .Where(a => !a.IsDeleted);
        }

        public IQueryable<HardwareRequest> GetAllByUserId(int userId)
        {
            var date = DateTime.Now.AddDays(-5);
            return GetAll()
                .OrderByDescending(a => a.Status == RequestStatus.Waiting).ThenBy(a => a.StartDate)
                .Include(a => a.Admin).ThenInclude(a => a.CompanyDetails)
                .Include(a => a.Admin).ThenInclude(a => a.PersonalDetails)
                .Include(a => a.User).ThenInclude(a => a.CompanyDetails)
                .Include(a => a.User).ThenInclude(a => a.PersonalDetails)
                .Where(a => a.UserId == userId && a.StartDate > date && !a.IsDeleted);
        }

        public HardwareRequest GetById(int hardwarerequestId)
        {
            return GetAll()
                .Include(d => d.User).ThenInclude(u => u.PersonalDetails)
                .Include(u => u.User).ThenInclude(u => u.CompanyDetails)
                .Include(d => d.Admin).ThenInclude(u => u.PersonalDetails)
                .Include(u => u.Admin).ThenInclude(u => u.CompanyDetails)
                .FirstOrDefault(d => d.Id == hardwarerequestId);
        }
    }
}

using HRDesk.Infrastructure.Entities;
using HRDesk.Infrastructure.RepositoryInterfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace HRDesk.Infrastructure.Repositories
{
    public class MeetingRepository : BaseRepository<Meeting>, IMeetingRepository
    {
        public MeetingRepository(HRDeskDbContext dbContext) : base(dbContext)
        {

        }
        public IQueryable<Meeting> GetAllMeetings()
        {
            return GetAll().Where(a => !a.IsDeleted);
        }

        public IQueryable<Meeting> GetAllMeetingsBetweenRange(DateTime startDate, DateTime endDate, int teamId)
        {
            return GetAll().Where(a => !a.IsDeleted &&
            startDate.Year <= a.StartDate.Year && startDate.Month <= a.StartDate.Month && startDate.Day <= a.StartDate.Day &&
            endDate.Year >= a.EndDate.Year && endDate.Month >= a.EndDate.Month && endDate.Day >= a.EndDate.Day && a.TeamId == teamId
            );
        }
    }
}

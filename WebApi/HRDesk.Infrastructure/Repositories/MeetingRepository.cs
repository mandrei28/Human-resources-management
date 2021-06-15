using HRDesk.Infrastructure.Entities;
using HRDesk.Infrastructure.RepositoryInterfaces;
using Microsoft.EntityFrameworkCore;
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
            return GetAll().Include(a => a.MeetingRoom).Include(a => a.Team).Where(a => !a.IsDeleted);
        }

        public IQueryable<Meeting> GetClosest10Meetings(int teamId)
        {
            var yesterday = DateTime.Today.AddDays(-1);
            return GetAll().OrderBy(a => a.StartDate).Include(a => a.MeetingRoom).Include(a => a.Team).Where(a => !a.IsDeleted &&
            a.StartDate.Year >= yesterday.Year &&
            a.StartDate.Month >= yesterday.Month &&
            a.StartDate.Day > yesterday.Day && a.StartDate.Hour >= yesterday.Hour && a.TeamId == teamId).Take(10);
        }

        public IQueryable<Meeting> GetAllMeetingsBetweenRange(DateTime startDate, DateTime endDate, int teamId)
        {
            return GetAll().Include(a => a.MeetingRoom).Include(a => a.Team).Where(a => !a.IsDeleted &&
            startDate.Year <= a.StartDate.Year && startDate.Month <= a.StartDate.Month && startDate.Day <= a.StartDate.Day &&
            endDate.Year >= a.EndDate.Year && endDate.Month >= a.EndDate.Month && endDate.Day >= a.EndDate.Day && a.TeamId == teamId
            );
        }
    }
}

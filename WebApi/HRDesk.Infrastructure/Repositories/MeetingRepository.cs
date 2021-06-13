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
    }
}

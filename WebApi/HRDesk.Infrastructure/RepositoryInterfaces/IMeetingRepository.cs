using HRDesk.Infrastructure.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace HRDesk.Infrastructure.RepositoryInterfaces
{
    public interface IMeetingRepository : IBaseRepository<Meeting>
    {
        IQueryable<Meeting> GetAllMeetings();
    }
}

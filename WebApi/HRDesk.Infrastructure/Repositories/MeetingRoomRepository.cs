using HRDesk.Infrastructure.Entities;
using HRDesk.Infrastructure.RepositoryInterfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace HRDesk.Infrastructure.Repositories
{
    public class MeetingRoomRepository : BaseRepository<MeetingRoom>, IMeetingRoomRepository
    {
        public MeetingRoomRepository(HRDeskDbContext dbContext) : base(dbContext)
        {

        }
    }
}

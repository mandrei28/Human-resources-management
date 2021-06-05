using HRDesk.Infrastructure.Entities;
using HRDesk.Infrastructure.RepositoryInterfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace HRDesk.Infrastructure.Repositories
{
    public class DayoffRepository : BaseRepository<Dayoff>, IDayoffRepository
    {
        public DayoffRepository(HRDeskDbContext dbContext) : base(dbContext)
        {

        }
    }
}

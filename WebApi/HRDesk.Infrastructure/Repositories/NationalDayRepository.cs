using HRDesk.Infrastructure.Entities;
using HRDesk.Infrastructure.RepositoryInterfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace HRDesk.Infrastructure.Repositories
{
    public class NationalDayRepository : BaseRepository<NationalDay>, INationalDayRepository
    {
        public NationalDayRepository(HRDeskDbContext dbContext) : base(dbContext)
        {

        }
        public IQueryable<NationalDay> GetAllByYear(int year)
        {

            return GetAll().Where(nd => nd.StartDate.Year == year);
        }
    }
}

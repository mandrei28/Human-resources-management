using HRDesk.Infrastructure.Entities;
using HRDesk.Infrastructure.RepositoryInterfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace HRDesk.Infrastructure.Repositories
{
    public class FunctionRepository : BaseRepository<Function>, IFunctionRepository
    {
        public FunctionRepository(HRDeskDbContext dbContext) : base(dbContext)
        {

        }
    }
}

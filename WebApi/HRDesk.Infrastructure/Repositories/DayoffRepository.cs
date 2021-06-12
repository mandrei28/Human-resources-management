﻿using HRDesk.Infrastructure.Entities;
using HRDesk.Infrastructure.Enums;
using HRDesk.Infrastructure.RepositoryInterfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace HRDesk.Infrastructure.Repositories
{
    public class DayoffRepository : BaseRepository<Dayoff>, IDayoffRepository
    {
        public DayoffRepository(HRDeskDbContext dbContext) : base(dbContext)
        {

        }

        public IQueryable<Dayoff> GetAllByAdminId(int adminId)
        {
            return GetAll().OrderByDescending(a => a.Status == RequestStatus.Waiting).Include(a => a.Admin).Include(a => a.User).Where(a => a.AdminId == adminId);
        }
    }
}

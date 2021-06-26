using HRDesk.Infrastructure.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace HRDesk.Infrastructure.RepositoryInterfaces
{
    public interface IHardwareRequestRepository : IBaseRepository<HardwareRequest>
    {
        IQueryable<HardwareRequest> GetAllHardwareRequests();
        IQueryable<HardwareRequest> GetAllByUserId(int userId);
        HardwareRequest GetById(int leaverequestId);
    }
}

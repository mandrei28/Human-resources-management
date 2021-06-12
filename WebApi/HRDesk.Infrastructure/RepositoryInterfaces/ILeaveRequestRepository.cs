using HRDesk.Infrastructure.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace HRDesk.Infrastructure.RepositoryInterfaces
{
    public interface ILeaveRequestRepository : IBaseRepository<LeaveRequest>
    {
        IQueryable<LeaveRequest> GetAllByAdminId(int adminId);
    }
}

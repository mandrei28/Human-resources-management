using HRDesk.Infrastructure.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace HRDesk.Infrastructure.RepositoryInterfaces
{
    public interface IUserPermissionRepository : IBaseRepository<UserPermission>
    {
        IQueryable<UserPermission> GetAllByUserId(int userId);
    }
}

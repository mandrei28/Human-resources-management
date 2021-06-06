using HRDesk.Infrastructure.Entities;
using HRDesk.Infrastructure.RepositoryInterfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace HRDesk.Infrastructure.Repositories
{
    public class UserPermissionRepository : BaseRepository<UserPermission>, IUserPermissionRepository
    {
        public UserPermissionRepository(HRDeskDbContext dbContext) : base(dbContext)
        {
        }
        public IQueryable<UserPermission> GetAllByUserId(int userId)
        {
            return GetAll().Where(up => up.UserId == userId);
        }
    }
}

using HRDesk.Infrastructure.Entities;
using HRDesk.Infrastructure.RepositoryInterfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace HRDesk.Infrastructure.Repositories
{
    public class UserRepository : BaseRepository<User>, IUserRepository
    {
        public UserRepository(HRDeskDbContext dbContext) : base(dbContext)
        {
        }
        public bool EmailAlreadyInUse(string email)
        {
            return GetAll().Any(u => u.WorkEmail == email);
        }

        public User GetUserByEmail(string email)
        {
            return GetAll().Where(u => u.WorkEmail == email).FirstOrDefault();
        }

        public bool CheckIfEmailIsInUse(string email)
        {
            return GetAll().Any(u => u.WorkEmail == email);
        }

        public User GetUserById(int id)
        {
            return GetAll().Where(u => u.Id == id).FirstOrDefault();
        }
    }
}

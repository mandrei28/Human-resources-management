using HRDesk.Infrastructure.Entities;
using HRDesk.Infrastructure.RepositoryInterfaces;
using Microsoft.EntityFrameworkCore;
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
            return GetAll().Where(u => u.WorkEmail == email && !u.IsDeleted).FirstOrDefault();
        }

        public bool CheckIfEmailIsInUse(string email)
        {
            return GetAll().Any(u => u.WorkEmail == email);
        }

        public User GetUserById(int id)
        {
            return GetAll().Where(u => u.Id == id && !u.IsDeleted).FirstOrDefault();
        }

        public IQueryable<User> GetUsers()
        {
            return GetAll().Include(u => u.Team).Include(u => u.Function).Include(u => u.Office).Where(u => !u.IsDeleted);
        }
    }
}

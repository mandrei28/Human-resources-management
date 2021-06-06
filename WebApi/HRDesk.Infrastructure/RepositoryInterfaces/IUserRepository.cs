using HRDesk.Infrastructure.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace HRDesk.Infrastructure.RepositoryInterfaces
{
    public interface IUserRepository : IBaseRepository<User>
    {
        bool EmailAlreadyInUse(string email);
        User GetUserById(int id);
        User GetUserByEmail(string email);
        bool CheckIfEmailIsInUse(string email);
    }
}

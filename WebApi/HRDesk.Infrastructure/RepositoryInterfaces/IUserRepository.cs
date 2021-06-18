using HRDesk.Infrastructure.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRDesk.Infrastructure.RepositoryInterfaces
{
    public interface IUserRepository : IBaseRepository<User>
    {
        User GetUserById(int id);
        User GetUserByEmail(string email);
        bool CheckIfEmailIsInUse(string email);
        IQueryable<User> GetUsers();
        IQueryable<User> GetAdmins();
        public int GetEmployeesNumber();
        public int GetBoardNumber();
        public int GetHumanResourceNumber();
        public int GetProjectManagerNumber();
        public int GetDevelopersNumber();
        public int GetQualityAssuranceNumber();
        Task<User> GetByIDAsync(int id);
    }
}

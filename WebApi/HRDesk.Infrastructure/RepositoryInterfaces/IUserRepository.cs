using HRDesk.Infrastructure.Entities;
using HRDesk.Infrastructure.Models;
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
        int GetEmployeesNumber();
        int GetBoardNumber();
        int GetHumanResourceNumber();
        int GetProjectManagerNumber();
        int GetDevelopersNumber();
        int GetQualityAssuranceNumber();
        Task<User> GetByIDAsync(int id);
        int GetNumberOfUsersBetweenAge(int startAge, int endAge);
        IQueryable<ChartModel> GetFunctionChart();
        IQueryable<ChartModel> GetCountryChart();
    }
}

using HRDesk.Infrastructure.Models;
using HRDesk.Services.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace HRDesk.Services.ServiceInterfaces
{
    public interface IUserService
    {
        AuthResponseModel Login(AuthModel model);
        AuthResponseModel SilentLogin(int userId);
        Task<UserModel> RegisterUser(UserModel userModel);
        List<UserModel> GetUsers();
        UserModel GetUserById(int userId);
        Task DeleteUser(int userId);
        Task UpdateUser(UserModel userModel);
        List<UserModel> GetAdmins();
        CompanyStatisticsModel GetCompanyStatistics();
        List<ChartModel> GetAgeChart();
        List<ChartModel> GetFunctionChart();
        List<ChartModel> GetCountryChart();
    }
}

using HRDesk.Infrastructure.Entities;
using HRDesk.Infrastructure.Models;
using HRDesk.Infrastructure.RepositoryInterfaces;
using HRDesk.Services.Mappers;
using HRDesk.Services.Models;
using HRDesk.Services.ServiceInterfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRDesk.Services.Services
{
    public class UserService : IUserService
    {
        private IUnitOfWork _unitOfWork;
        private IAuthService _authService;
        public UserService(IUnitOfWork unitOfWork, IAuthService authService)
        {
            _unitOfWork = unitOfWork;
            _authService = authService;
        }

        public AuthResponseModel Login(AuthModel model)
        {
            var user = _unitOfWork.Users.GetUserByEmail(model.Email);

            if (user == null)
            {
                throw new Exception("No user with this email");
            }

            var passwordValid = _authService.VerifyPassword(model.Password, user.Password);
            if (!passwordValid)
            {
                throw new Exception("Invalid password");
            }

            var authData = _authService.GetAuthData(user);
            authData.UserModel.Permissions = GetUserPermissions(user.Id);
            return authData;
        }

        public AuthResponseModel SilentLogin(int userId)
        {
            var user = _unitOfWork.Users.GetUserById(userId);
            if (user == null)
            {
                throw new Exception("User not found");
            }

            var authData = _authService.GetAuthData(user);
            authData.UserModel.Permissions = GetUserPermissions(user.Id);

            return authData;
        }

        public async Task<UserModel> RegisterUser(UserModel userModel)
        {
            var emailAlreadyInUse = _unitOfWork.Users.CheckIfEmailIsInUse(userModel.WorkEmail);
            if (emailAlreadyInUse)
            {
                throw new Exception("Work email already in use");
            }
            await _unitOfWork.BeginTransactionAsync();
            try
            {
                var user = UserMapper.ToUser(userModel);
                user.Password = _authService.HashPassword(userModel.Password);
                await _unitOfWork.Users.InsertAsync(user);
                await _unitOfWork.CommitAsync();
                foreach (int permissionId in userModel.Permissions)
                {
                    await _unitOfWork.UserPermission.InsertAsync(new UserPermission
                    {
                        PermissionId = permissionId,
                        UserId = user.Id,
                    });
                }
                await _unitOfWork.CommitAsync();
                await _unitOfWork.CommitTransactionAsync();
                userModel.Id = user.Id;
                return userModel;
            }
            catch
            {
                await _unitOfWork.RollbackTransactionAsync();
                throw new Exception("Register failed with unknown reason");
            }
        }

        public List<UserModel> GetUsers()
        {
            var users = _unitOfWork.Users.GetUsers();
            var userModels = users.Select(user => UserMapper.ToUserModel(user)).ToList();
            return userModels;
        }

        public UserModel GetUserById(int userId)
        {
            var user = _unitOfWork.Users.GetUserById(userId);
            if (user == null)
            {
                throw new Exception("User not found");
            }
            var userModel = UserMapper.ToUserModel(user);
            userModel.Permissions = GetUserPermissions(userId);
            return userModel;
        }

        public List<UserModel> GetAdmins()
        {
            var admins = _unitOfWork.Users.GetAdmins();
            var adminModels = admins.Select(admin => UserMapper.ToUserModel(admin)).ToList();
            return adminModels;
        }

        public async Task DeleteUser(int userId)
        {
            var user = await _unitOfWork.Users.GetByIDAsync(userId);
            if (user == null)
            {
                throw new Exception("User not found");
            }
            _unitOfWork.Users.Delete(user);
            await _unitOfWork.CommitAsync();
        }

        public Dictionary<string, int> UserStatistics()
        {
            var statistics = new Dictionary<string, int>();
            statistics.Add("total", _unitOfWork.Users.GetAll().Count());
            return statistics;
        }

        public async Task UpdateUser(UserModel userModel)
        {
            var user = await _unitOfWork.Users.GetByIDAsync(userModel.Id);
            var updatedUser = UserMapper.UpdateUser(user, userModel);
            if (userModel.Password != null && userModel.Password != "")
            {
                updatedUser.Password = _authService.HashPassword(userModel.Password);
            }
            _unitOfWork.Users.Update(updatedUser);
            await _unitOfWork.CommitAsync();
        }

        private List<int> GetUserPermissions(int userId)
        {
            var permissions = new List<int>();
            var userPermissions = _unitOfWork.UserPermission.GetAllByUserId(userId);
            foreach (UserPermission userPermission in userPermissions)
            {
                permissions.Add(userPermission.PermissionId.Value);
            }
            return permissions;
        }

        public CompanyStatisticsModel GetCompanyStatistics()
        {
            var employees = _unitOfWork.Users.GetEmployeesNumber();
            var board = _unitOfWork.Users.GetBoardNumber();
            var humanResource = _unitOfWork.Users.GetHumanResourceNumber();
            var projectManager = _unitOfWork.Users.GetProjectManagerNumber();
            var developers = _unitOfWork.Users.GetDevelopersNumber();
            var qualityAssurance = _unitOfWork.Users.GetQualityAssuranceNumber();

            return new CompanyStatisticsModel
            {
                Employees = employees,
                QualityAssurance = qualityAssurance,
                Board = board,
                Developers = developers,
                HumanResource = humanResource,
                ProjectManager = projectManager
            };
        }

        public List<ChartModel> GetAgeChart()
        {
            var chart = new List<ChartModel>();
            var twentyToThirty = _unitOfWork.Users.GetNumberOfUsersBetweenAge(20, 30);
            var thirtyToForty = _unitOfWork.Users.GetNumberOfUsersBetweenAge(30, 40);
            var fortyToFifty = _unitOfWork.Users.GetNumberOfUsersBetweenAge(40, 50);
            var fiftyPlus = _unitOfWork.Users.GetNumberOfUsersBetweenAge(50, 100);
            chart.Add(new ChartModel
            {
                Key = "20-30",
                Value = twentyToThirty
            });
            chart.Add(new ChartModel
            {
                Key = "30-40",
                Value = thirtyToForty
            });
            chart.Add(new ChartModel
            {
                Key = "40-50",
                Value = fortyToFifty
            });
            chart.Add(new ChartModel
            {
                Key = "50+",
                Value = fiftyPlus
            });
            return chart;
        }

        public List<ChartModel> GetFunctionChart()
        {
            var chart = _unitOfWork.Users.GetFunctionChart().ToList();
            return chart;
        }

        public List<ChartModel> GetCountryChart()
        {
            var chart = _unitOfWork.Users.GetCountryChart().ToList();
            return chart;
        }
    }
}

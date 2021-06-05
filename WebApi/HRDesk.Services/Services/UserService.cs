using HRDesk.Infrastructure.RepositoryInterfaces;
using HRDesk.Services.Models;
using HRDesk.Services.ServiceInterfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

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

            return _authService.GetAuthData(user);
        }

        public AuthResponseModel SilentLogin(int userId)
        {
            var user = _unitOfWork.Users.GetUserById(userId);
            if (user == null)
            {
                throw new Exception("User not found");
            }

            return _authService.GetAuthData(user);
        }

        public Dictionary<string, int> UserStatistics()
        {
            var statistics = new Dictionary<string, int>();
            statistics.Add("total", _unitOfWork.Users.GetAll().Count());
            return statistics;
        }
    }
}

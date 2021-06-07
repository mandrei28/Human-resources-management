﻿using HRDesk.Services.Models;
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
        Task<UserModel> GetUserById(int userId);
        Task DeleteUser(int userId);
    }
}
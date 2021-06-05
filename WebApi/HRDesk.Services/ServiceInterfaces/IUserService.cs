using HRDesk.Services.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace HRDesk.Services.ServiceInterfaces
{
    public interface IUserService
    {
        AuthResponseModel Login(AuthModel model);
        AuthResponseModel SilentLogin(int userId);
    }
}

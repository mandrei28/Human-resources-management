using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using HRDesk.Infrastructure.Entities;
using HRDesk.Infrastructure.RepositoryInterfaces;
using HRDesk.Services.Models;
using HRDesk.Services.ServiceInterfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HRDesk.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UserController : Controller
    {
        private IUserService _userService;
        private IIdentityService _identityService;

        public UserController(IUserService userService, IIdentityService identityService)
        {
            _userService = userService;
            _identityService = identityService;
        }

        [AllowAnonymous]
        [HttpPost("login")]
        public ActionResult<AuthResponseModel> Post([FromBody] AuthModel model)
        {
            if (!ModelState.IsValid)
            {
                throw new Exception("Invalid model");
            }
            return _userService.Login(model);
        }

        [Authorize]
        [HttpPost("silentLogin")]
        public ActionResult<AuthResponseModel> SilentLogin()
        {
            var userId = _identityService.GetUserId();
            if (userId == null)
            {
                throw new Exception("Invalid token. Please relog");
            }
            return _userService.SilentLogin(userId.Value);
        }

        [Authorize]
        [HttpPost("register")]
        public async Task<UserModel> Register([FromBody] UserModel model)
        {
            return await _userService.RegisterUser(model);
        }
    }
}

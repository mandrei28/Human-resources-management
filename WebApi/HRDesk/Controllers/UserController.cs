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
        private IUnitOfWork _unitOfWork;
        private IAuthService _authService;

        public UserController(IUnitOfWork unitOfWork, IAuthService authService)
        {
            _unitOfWork = unitOfWork;
            _authService = authService;
        }

        [AllowAnonymous]
        [HttpPost("login")]
        public ActionResult<AuthResponseModel> Post([FromBody] AuthModel model)
        {
            var hashPassword = _authService.HashPassword(model.Password);
            if (!ModelState.IsValid) return BadRequest(ModelState);
            var user = _unitOfWork.Users.GetUserByEmail(model.Email);

            if (user == null)
            {
                return BadRequest(new { email = "no user with this email" });
            }

            var passwordValid = _authService.VerifyPassword(model.Password, user.Password);
            if (!passwordValid)
            {
                return BadRequest(new { password = "invalid password" });
            }

            return _authService.GetAuthData(user);
        }

        [Authorize]
        [HttpPost("silentLogin")]
        public ActionResult<AuthResponseModel> SilentLogin()
        {
            var identity = HttpContext.User.Identity as ClaimsIdentity;
            if (identity != null)
            {
                IEnumerable<Claim> claims = identity.Claims;
                var userId = claims.ElementAt(0).Value;
                var user = _unitOfWork.Users.GetUserById(Int32.Parse(userId));
                if (user == null)
                {
                    return BadRequest(new { email = "no user with this email" });
                }

                return _authService.GetAuthData(user);
            }
            return Unauthorized();
        }
    }
}

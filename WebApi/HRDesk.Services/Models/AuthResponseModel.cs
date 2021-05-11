using System;
using System.Collections.Generic;
using System.Text;

namespace HRDesk.Services.Models
{
    public class AuthResponseModel
    {
        public string Token { get; set; }
        public long TokenExpirationTime { get; set; }
        public UserAuthModel UserModel { get; set; }
    }
}

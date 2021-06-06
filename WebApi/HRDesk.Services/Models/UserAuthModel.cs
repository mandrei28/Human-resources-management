using System;
using System.Collections.Generic;
using System.Text;

namespace HRDesk.Services.Models
{
    public class UserAuthModel
    {
        public int Id { get; set; }
        public List<int> Permissions { get; set; }
    }
}

﻿using System;
using System.Collections.Generic;
using System.Text;

namespace HRDesk.Infrastructure.Entities
{
    public class User : AuditEntity<int>
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
}

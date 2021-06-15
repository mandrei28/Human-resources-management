using System;
using System.Collections.Generic;
using System.Text;

namespace HRDesk.Infrastructure.Entities
{
    public class Function : AuditEntity<int>
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public bool Predefined { get; set; }
    }
}

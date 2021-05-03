using System;
using System.Collections.Generic;
using System.Text;

namespace HRDesk.Infrastructure.Entities
{
    public class User : AuditEntity<Guid>
    {
        public string Name { get; set; }
    }
}

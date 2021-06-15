using System;
using System.Collections.Generic;
using System.Text;

namespace HRDesk.Infrastructure.Entities
{
    public class Office : AuditEntity<int>
    {
        public string Name { get; set; }
        public int Number { get; set; }
        public string Location { get; set; }
        public int Capacity { get; set; }
        public bool Predefined { get; set; }
    }
}

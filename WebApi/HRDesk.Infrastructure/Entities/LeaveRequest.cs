using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace HRDesk.Infrastructure.Entities
{
    public class LeaveRequest : AuditEntity<int>
    {
        public string Description { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime StartHour { get; set; }
        public DateTime EndHour { get; set; }
        public int? UserId { get; set; }

        [ForeignKey("UserId")]
        public User User { get; set; }
        public int? AdminId { get; set; }

        [ForeignKey("AdminId")]
        public User Admin { get; set; }
        public bool Approved { get; set; }
    }
}

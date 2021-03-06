using HRDesk.Infrastructure.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace HRDesk.Infrastructure.Entities
{
    public class LeaveRequest : DeleteEntity<int>
    {
        public string Description { get; set; }
        [Column(TypeName = "date")]
        public DateTime StartDate { get; set; }
        public DateTime StartHour { get; set; }
        public DateTime EndHour { get; set; }
        public int? UserId { get; set; }

        [ForeignKey("UserId")]
        public User User { get; set; }
        public int? AdminId { get; set; }

        [ForeignKey("AdminId")]
        public User Admin { get; set; }
        public RequestStatus Status { get; set; }
    }
}

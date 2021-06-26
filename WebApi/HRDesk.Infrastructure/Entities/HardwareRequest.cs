using HRDesk.Infrastructure.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace HRDesk.Infrastructure.Entities
{
    public class HardwareRequest : DeleteEntity<int>
    {
        public string Description { get; set; }
        [Column(TypeName = "date")]
        public DateTime? StartDate { get; set; }
        [Column(TypeName = "date")]
        public DateTime? EndDate { get; set; }
        public int? UserId { get; set; }

        [ForeignKey("UserId")]
        public User User { get; set; }
        public int? AdminId { get; set; }

        [ForeignKey("AdminId")]
        public User Admin { get; set; }
        public RequestStatus Status { get; set; }
        public int HardwareRequestType { get; set; }
    }
}

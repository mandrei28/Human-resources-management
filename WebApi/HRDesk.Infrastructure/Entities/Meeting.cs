using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace HRDesk.Infrastructure.Entities
{
    public class Meeting : DeleteEntity<int>
    {
        public string Title { get; set; }
        public bool AllDay { get; set; }
        public string RecurenceRule { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public int? MeetingRoomId { get; set; }

        [ForeignKey("MeetingRoomId")]
        public MeetingRoom MeetingRoom { get; set; }

        public int? TeamId { get; set; }

        [ForeignKey("TeamId")]
        public Team Team { get; set; }
    }
}

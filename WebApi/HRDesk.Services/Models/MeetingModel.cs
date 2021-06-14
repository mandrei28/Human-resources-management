using System;
using System.Collections.Generic;
using System.Text;

namespace HRDesk.Services.Models
{
    public class MeetingModel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Notes { get; set; }
        public bool AllDay { get; set; }
        public string RRule { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public int? RoomId { get; set; }
        public string RoomName { get; set; }
        public int? TeamId { get; set; }
    }
}

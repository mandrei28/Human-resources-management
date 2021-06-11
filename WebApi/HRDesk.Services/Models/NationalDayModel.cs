using System;
using System.Collections.Generic;
using System.Text;

namespace HRDesk.Services.Models
{
    public class NationalDayModel
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public DateTime CreationDate { get; set; }
    }
}

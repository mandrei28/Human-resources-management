using System;
using System.Collections.Generic;
using System.Text;

namespace HRDesk.Services.Models
{
    public class TeamModel
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public string Name { get; set; }
        public DateTime CreationDate { get; set; }
        public bool Predefined { get; set; }
    }
}

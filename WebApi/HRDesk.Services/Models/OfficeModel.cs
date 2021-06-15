using System;
using System.Collections.Generic;
using System.Text;

namespace HRDesk.Services.Models
{
    public class OfficeModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Location { get; set; }
        public int Number { get; set; }
        public int Capacity { get; set; }
        public DateTime CreationDate { get; set; }
        public bool Predefined { get; set; }
    }
}

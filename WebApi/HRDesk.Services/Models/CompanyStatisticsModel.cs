using System;
using System.Collections.Generic;
using System.Text;

namespace HRDesk.Services.Models
{
    public class CompanyStatisticsModel
    {
        public int Employees { get; set; }
        public int Board { get; set; }
        public int HumanResource { get; set; }
        public int ProjectManager { get; set; }
        public int Developers { get; set; }
        public int QualityAssurance { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace HRDesk.Infrastructure.Entities
{
    public class CompanyDetails : EntityBase<int>
    {
        public int NumberOfDaysoff { get; set; }
        public int Salary { get; set; }
        [Column(TypeName = "date")]
        public DateTime DateOfEmployment { get; set; }
    }
}

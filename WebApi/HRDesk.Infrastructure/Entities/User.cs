using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace HRDesk.Infrastructure.Entities
{
    public class User : AuditEntity<int>
    {
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string CountryOfBirth { get; set; }
        public string Phone { get; set; }
        public string Adress { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string CNP { get; set; }
        public string WorkEmail { get; set; }
        public string Password { get; set; }
        public int NumberOfDaysoff { get; set; }
        public int Salary { get; set; }
        public DateTime DateOfEmployment { get; set; }
        public int? TeamId { get; set; }

        [ForeignKey("TeamId")]
        public Team Team { get; set; }

        public int? FunctionId { get; set; }

        [ForeignKey("FunctionId")]
        public Function Function { get; set; }

        public int? OfficeId { get; set; }

        [ForeignKey("OfficeId")]
        public Office Office { get; set; }
    }
}

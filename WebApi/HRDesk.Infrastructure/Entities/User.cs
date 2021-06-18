using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace HRDesk.Infrastructure.Entities
{
    public class User : DeleteEntity<int>
    {
        public string WorkEmail { get; set; }
        public string Password { get; set; }
        public bool Predefined { get; set; }
        public int? TeamId { get; set; }

        [ForeignKey("TeamId")]
        public Team Team { get; set; }

        public int? FunctionId { get; set; }

        [ForeignKey("FunctionId")]
        public Function Function { get; set; }

        public int? OfficeId { get; set; }

        [ForeignKey("OfficeId")]
        public Office Office { get; set; }
        public ICollection<UserPermission> Permissions { get; set; }
        public int? CompanyDetailsId { get; set; }

        [ForeignKey("CompanyDetailsId")]
        public CompanyDetails CompanyDetails { get; set; }
        public int? PersonalDetailsId { get; set; }

        [ForeignKey("PersonalDetailsId")]
        public PersonalDetails PersonalDetails { get; set; }
    }
}

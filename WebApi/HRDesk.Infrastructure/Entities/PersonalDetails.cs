using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace HRDesk.Infrastructure.Entities
{
    public class PersonalDetails : EntityBase<int>
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string CountryOfBirth { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
        [Column(TypeName = "date")]
        public DateTime DateOfBirth { get; set; }
        public string CNP { get; set; }
        public string Email { get; set; }
    }
}

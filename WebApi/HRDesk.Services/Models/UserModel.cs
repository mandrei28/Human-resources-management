using System;
using System.Collections.Generic;
using System.Text;

namespace HRDesk.Services.Models
{
    public class UserModel
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string CountryOfBirth { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Cnp { get; set; }
        public int TeamId { get; set; }
        public int FunctionId { get; set; }
        public int OfficeId { get; set; }
        public string Password { get; set; }
        public string OfficeName { get; set; }
        public string TeamName { get; set; }
        public string FunctionName { get; set; }
        public int NumberOfDaysoff { get; set; }
        public int Salary { get; set; }
        public DateTime DateOfEmployment { get; set; }
        public string WorkEmail { get; set; }
        public List<int> Permissions { get; set; }
        public FunctionModel Function { get; set; }
        public OfficeModel Office { get; set; }
        public TeamModel Team { get; set; }
    }
}

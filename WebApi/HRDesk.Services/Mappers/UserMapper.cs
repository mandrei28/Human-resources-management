using HRDesk.Infrastructure.Entities;
using HRDesk.Services.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace HRDesk.Services.Mappers
{
    public class UserMapper
    {
        public static UserModel ToUserModel(User user)
        {
            return new UserModel()
            {
                Id = user.Id,
                FirstName = user.PersonalDetails.FirstName,
                Address = user.PersonalDetails.Address,
                Cnp = user.PersonalDetails.CNP,
                CountryOfBirth = user.PersonalDetails.CountryOfBirth,
                DateOfBirth = user.PersonalDetails.DateOfBirth,
                DateOfEmployment = user.CompanyDetails.DateOfEmployment,
                Email = user.PersonalDetails.Email,
                WorkEmail = user.WorkEmail,
                FunctionId = user.FunctionId.Value,
                LastName = user.PersonalDetails.LastName,
                NumberOfDaysoff = user.CompanyDetails.NumberOfDaysoff,
                OfficeId = user.OfficeId.Value,
                Phone = user.PersonalDetails.Phone,
                Salary = user.CompanyDetails.Salary,
                TeamId = user.TeamId.Value,
                Office = user.Office != null ? OfficeMapper.ToOfficeModel(user.Office) : null,
                OfficeName = user.Office != null ? user.Office.Name : null,
                Team = user.Team != null ? TeamMapper.ToTeamModel(user.Team) : null,
                TeamName = user.Team != null ? user.Team.Name : null,
                Function = user.Function != null ? FunctionMapper.ToFunctionModel(user.Function) : null,
                FunctionName = user.Function != null ? user.Function.Name : null,
                Password = null,
                Predefined = user.Predefined,
            };
        }

        public static User ToUser(UserModel userModel)
        {
            return new User()
            {
                // Id = userModel.Id,
                PersonalDetails = new PersonalDetails
                {
                    FirstName = userModel.FirstName,
                    Address = userModel.Address,
                    CNP = userModel.Cnp,
                    CountryOfBirth = userModel.CountryOfBirth,
                    DateOfBirth = userModel.DateOfBirth,
                    Email = userModel.Email,
                    LastName = userModel.LastName,
                    Phone = userModel.Phone,
                },
                CompanyDetails = new CompanyDetails
                {
                    DateOfEmployment = userModel.DateOfEmployment,
                    NumberOfDaysoff = userModel.NumberOfDaysoff,
                    Salary = userModel.Salary,
                },
                WorkEmail = userModel.WorkEmail,
                FunctionId = userModel.FunctionId,
                OfficeId = userModel.OfficeId,
                TeamId = userModel.TeamId,
            };
        }

        public static User UpdateUser(User user, UserModel userModel)
        {
            user.PersonalDetails.FirstName = userModel.FirstName;
            user.PersonalDetails.Address = userModel.Address;
            user.PersonalDetails.CNP = userModel.Cnp;
            user.PersonalDetails.CountryOfBirth = userModel.CountryOfBirth;
            user.PersonalDetails.DateOfBirth = userModel.DateOfBirth;
            user.CompanyDetails.DateOfEmployment = userModel.DateOfEmployment;
            user.PersonalDetails.Email = userModel.Email;
            user.WorkEmail = userModel.WorkEmail;
            user.FunctionId = userModel.FunctionId;
            user.PersonalDetails.LastName = userModel.LastName;
            user.CompanyDetails.NumberOfDaysoff = userModel.NumberOfDaysoff;
            user.OfficeId = userModel.OfficeId;
            user.PersonalDetails.Phone = userModel.Phone;
            user.CompanyDetails.Salary = userModel.Salary;
            user.TeamId = userModel.TeamId;
            return user;
        }
    }
}

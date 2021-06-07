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
                FirstName = user.FirstName,
                Address = user.Address,
                Cnp = user.CNP,
                CountryOfBirth = user.CountryOfBirth,
                DateOfBirth = user.DateOfBirth,
                DateOfEmployment = user.DateOfEmployment,
                Email = user.Email,
                WorkEmail = user.WorkEmail,
                FunctionId = user.FunctionId.Value,
                LastName = user.LastName,
                NumberOfDaysoff = user.NumberOfDaysoff,
                OfficeId = user.OfficeId.Value,
                Phone = user.Phone,
                Salary = user.Salary,
                TeamId = user.TeamId.Value,
                Office = user.Office != null ? OfficeMapper.ToOfficeModel(user.Office) : null,
                Team = user.Team != null ? TeamMapper.ToTeamModel(user.Team) : null,
                Function = user.Function != null ? FunctionMapper.ToFunctionModel(user.Function) : null,
                Password = null,
            };
        }

        public static User ToUser(UserModel userModel)
        {
            return new User()
            {
                Id = userModel.Id,
                FirstName = userModel.FirstName,
                Address = userModel.Address,
                CNP = userModel.Cnp,
                CountryOfBirth = userModel.CountryOfBirth,
                DateOfBirth = userModel.DateOfBirth,
                DateOfEmployment = userModel.DateOfEmployment,
                Email = userModel.Email,
                WorkEmail = userModel.WorkEmail,
                FunctionId = userModel.FunctionId,
                LastName = userModel.LastName,
                NumberOfDaysoff = userModel.NumberOfDaysoff,
                OfficeId = userModel.OfficeId,
                Phone = userModel.Phone,
                Salary = userModel.Salary,
                TeamId = userModel.TeamId,
            };
        }
    }
}

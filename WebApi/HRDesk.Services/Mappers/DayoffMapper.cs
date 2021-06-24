using HRDesk.Infrastructure.Entities;
using HRDesk.Infrastructure.Enums;
using HRDesk.Services.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace HRDesk.Services.Mappers
{
    public class DayoffMapper
    {
        public static DayoffModel ToDayoffModel(Dayoff dayoff)
        {
            return new DayoffModel()
            {
                Id = dayoff.Id,
                Description = dayoff.Description,
                StartDate = dayoff.StartDate.ToLocalTime().AddSeconds(-dayoff.StartDate.ToLocalTime().Second),
                EndDate = dayoff.EndDate.ToLocalTime().AddSeconds(-dayoff.StartDate.ToLocalTime().Second),
                UserId = dayoff.UserId,
                UserModel = UserMapper.ToUserModel(dayoff.User),
                AdminId = dayoff.AdminId,
                AdminModel = UserMapper.ToUserModel(dayoff.Admin),
                Status = dayoff.Status,
                VerifiedBy = dayoff.Status != RequestStatus.Waiting ? dayoff.Admin.PersonalDetails.LastName + " " + dayoff.Admin.PersonalDetails.FirstName : null,
                MadeBy = dayoff.User.PersonalDetails.LastName + " " + dayoff.User.PersonalDetails.FirstName,
            };
        }

        public static Dayoff ToDayoff(DayoffModel dayoffModel)
        {
            return new Dayoff()
            {
                Description = dayoffModel.Description,
                StartDate = dayoffModel.StartDate,
                EndDate = dayoffModel.EndDate,
                UserId = dayoffModel.UserId,
                AdminId = dayoffModel.AdminId,
                Status = dayoffModel.Status,
            };
        }
    }
}

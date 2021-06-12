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
                StartDate = dayoff.StartDate,
                EndDate = dayoff.EndDate,
                UserId = dayoff.UserId,
                UserModel = UserMapper.ToUserModel(dayoff.User),
                AdminId = dayoff.AdminId,
                AdminModel = UserMapper.ToUserModel(dayoff.Admin),
                Status = dayoff.Status,
                VerifiedBy = dayoff.Status != RequestStatus.Waiting ? dayoff.Admin.LastName + " " + dayoff.Admin.FirstName : null,
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

        //public static Dayoff UpdateDayoff(Dayoff dayoff, DayoffModel dayoffModel)
        //{
        //    dayoff.Description = dayoffModel.Description;
        //    dayoff.StartDate = dayoffModel.StartDate;
        //    dayoff.StartHour = dayoffModel.StartHour;
        //    dayoff.EndHour = dayoffModel.EndHour;
        //    dayoff.UserId = dayoffModel.UserId;
        //    dayoff.AdminId = dayoffModel.AdminId;
        //    dayoff.Approved = dayoffModel.Approved;
        //    return dayoff;
        //}
    }
}

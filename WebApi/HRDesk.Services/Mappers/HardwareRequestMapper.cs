using HRDesk.Infrastructure.Entities;
using HRDesk.Infrastructure.Enums;
using HRDesk.Services.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace HRDesk.Services.Mappers
{
    public class HardwareRequestMapper
    {
        public static HardwareRequestModel ToHardwareRequestModel(HardwareRequest hardwareRequest)
        {
            return new HardwareRequestModel()
            {
                Id = hardwareRequest.Id,
                Description = hardwareRequest.Description,
                StartDate = hardwareRequest.StartDate.ToLocalTime().AddSeconds(-hardwareRequest.StartDate.ToLocalTime().Second),
                EndDate = hardwareRequest.EndDate.ToLocalTime().AddSeconds(-hardwareRequest.EndDate.ToLocalTime().Second),
                UserId = hardwareRequest.UserId,
                UserModel = UserMapper.ToUserModel(hardwareRequest.User),
                AdminId = hardwareRequest.AdminId,
                Status = hardwareRequest.Status,
                AdminModel = hardwareRequest.AdminId != null ? UserMapper.ToUserModel(hardwareRequest.Admin) : null,
                HardwareRequestType = (HardwareRequestType)hardwareRequest.HardwareRequestType,
                MadeBy = hardwareRequest.User.PersonalDetails.LastName + " " + hardwareRequest.User.PersonalDetails.FirstName,
            };
        }

        public static HardwareRequest ToHardwareRequest(HardwareRequestModel hardwareRequestModel)
        {
            return new HardwareRequest()
            {
                Description = hardwareRequestModel.Description,
                StartDate = hardwareRequestModel.StartDate,
                EndDate = hardwareRequestModel.EndDate,
                UserId = hardwareRequestModel.UserId,
                HardwareRequestType = (int)hardwareRequestModel.HardwareRequestType,
                Status = hardwareRequestModel.Status,
            };
        }
    }
}

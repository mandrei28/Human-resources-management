using HRDesk.Infrastructure.Entities;
using HRDesk.Infrastructure.Enums;
using HRDesk.Services.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace HRDesk.Services.Mappers
{
    public class LeaveRequestMapper
    {
        public static LeaveRequestModel ToLeaveRequestModel(LeaveRequest leaveRequest)
        {
            return new LeaveRequestModel()
            {
                Id = leaveRequest.Id,
                Description = leaveRequest.Description,
                StartDate = leaveRequest.StartDate.ToLocalTime().AddSeconds(-leaveRequest.StartDate.ToLocalTime().Second),
                StartHour = leaveRequest.StartHour.ToLocalTime().AddSeconds(-leaveRequest.StartHour.ToLocalTime().Second),
                EndHour = leaveRequest.EndHour.ToLocalTime().AddSeconds(-leaveRequest.EndHour.ToLocalTime().Second),
                UserId = leaveRequest.UserId,
                UserModel = UserMapper.ToUserModel(leaveRequest.User),
                AdminId = leaveRequest.AdminId,
                AdminModel = UserMapper.ToUserModel(leaveRequest.Admin),
                Status = leaveRequest.Status,
                VerifiedBy = leaveRequest.Status != RequestStatus.Waiting ? leaveRequest.Admin.PersonalDetails.LastName + " " + leaveRequest.Admin.PersonalDetails.FirstName : null,
            };
        }

        public static LeaveRequest ToLeaveRequest(LeaveRequestModel leaveRequestModel)
        {
            return new LeaveRequest()
            {
                Description = leaveRequestModel.Description,
                StartDate = leaveRequestModel.StartDate,
                StartHour = leaveRequestModel.StartHour,
                EndHour = leaveRequestModel.EndHour,
                UserId = leaveRequestModel.UserId,
                AdminId = leaveRequestModel.AdminId,
                Status = leaveRequestModel.Status,
            };
        }
    }
}

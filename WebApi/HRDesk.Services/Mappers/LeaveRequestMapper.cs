﻿using HRDesk.Infrastructure.Entities;
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
                StartDate = leaveRequest.StartDate,
                StartHour = leaveRequest.StartHour,
                EndHour = leaveRequest.EndHour,
                UserId = leaveRequest.UserId,
                UserModel = UserMapper.ToUserModel(leaveRequest.User),
                AdminId = leaveRequest.AdminId,
                AdminModel = UserMapper.ToUserModel(leaveRequest.Admin),
                Status = leaveRequest.Status,
                VerifiedBy = leaveRequest.Status != RequestStatus.Waiting ? leaveRequest.Admin.LastName + " " + leaveRequest.Admin.FirstName : null,
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

        //public static LeaveRequest UpdateLeaveRequest(LeaveRequest leaveRequest, LeaveRequestModel leaveRequestModel)
        //{
        //    leaveRequest.Description = leaveRequestModel.Description;
        //    leaveRequest.StartDate = leaveRequestModel.StartDate;
        //    leaveRequest.StartHour = leaveRequestModel.StartHour;
        //    leaveRequest.EndHour = leaveRequestModel.EndHour;
        //    leaveRequest.UserId = leaveRequestModel.UserId;
        //    leaveRequest.AdminId = leaveRequestModel.AdminId;
        //    leaveRequest.Approved = leaveRequestModel.Approved;
        //    return leaveRequest;
        //}
    }
}
using HRDesk.Services.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace HRDesk.Services.ServiceInterfaces
{
    public interface ILeaveRequestService
    {
        List<LeaveRequestModel> GetAllAdminLeaveRequests(int adminId);
        Task<LeaveRequestModel> AcceptLeaveRequest(int leaveRequestId, int newStatus, int adminId);
        List<LeaveRequestModel> GetAllUserLeaveRequests(int userId);
        Task<LeaveRequestModel> AddLeaveRequest(LeaveRequestModel leaveRequestModel, int userId);
        Task DeleteLeaveRequest(int leaveRequestId);
    }
}

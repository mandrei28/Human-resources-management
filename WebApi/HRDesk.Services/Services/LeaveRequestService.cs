using HRDesk.Infrastructure.Enums;
using HRDesk.Infrastructure.RepositoryInterfaces;
using HRDesk.Services.Mappers;
using HRDesk.Services.Models;
using HRDesk.Services.ServiceInterfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRDesk.Services.Services
{
    public class LeaveRequestService : ILeaveRequestService
    {
        private IUnitOfWork _unitOfWork;
        public LeaveRequestService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public List<LeaveRequestModel> GetAllAdminLeaveRequests(int adminId)
        {
            var leaveRequests = _unitOfWork.LeaveRequests.GetAllByAdminId(adminId);
            var leaveRequestsModels = leaveRequests.Select(leaveRequest => LeaveRequestMapper.ToLeaveRequestModel(leaveRequest)).ToList();
            return leaveRequestsModels;
        }
        public List<LeaveRequestModel> GetAllUserLeaveRequests(int userId)
        {
            var leaveRequests = _unitOfWork.LeaveRequests.GetAllByUserId(userId);
            var leaveRequestsModels = leaveRequests.Select(leaveRequest => LeaveRequestMapper.ToLeaveRequestModel(leaveRequest)).ToList();
            return leaveRequestsModels;
        }

        public async Task DeleteLeaveRequest(int leaveRequestId)
        {
            var leaveRequest = await _unitOfWork.LeaveRequests.GetByIDAsync(leaveRequestId);
            _unitOfWork.LeaveRequests.Delete(leaveRequest);
            await _unitOfWork.CommitAsync();
        }

        public async Task<LeaveRequestModel> AddLeaveRequest(LeaveRequestModel leaveRequestModel, int userId)
        {
            leaveRequestModel.UserId = userId;
            leaveRequestModel.AdminId = leaveRequestModel.AdminModel.Id;
            var leaveRequest = LeaveRequestMapper.ToLeaveRequest(leaveRequestModel);
            await _unitOfWork.LeaveRequests.InsertAsync(leaveRequest);
            await _unitOfWork.CommitAsync();
            leaveRequestModel.Id = leaveRequest.Id;
            return leaveRequestModel;
        }

        public async Task<LeaveRequestModel> AcceptLeaveRequest(int leaveRequestId, int newStatus, int adminId)
        {
            var leaveRequest = await _unitOfWork.LeaveRequests.GetByIDAsync(leaveRequestId);
            var admin = await _unitOfWork.Users.GetByIDAsync(adminId);
            leaveRequest.Status = (RequestStatus)newStatus;
            leaveRequest.AdminId = adminId;
            leaveRequest.Admin = admin;
            await _unitOfWork.CommitAsync();
            var leaveRequestModel = LeaveRequestMapper.ToLeaveRequestModel(leaveRequest);
            return leaveRequestModel;
        }
    }
}

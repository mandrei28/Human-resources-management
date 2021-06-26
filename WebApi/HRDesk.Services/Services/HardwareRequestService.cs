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
    public class HardwareRequestService : IHardwareRequestService
    {
        private IUnitOfWork _unitOfWork;
        public HardwareRequestService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public List<HardwareRequestModel> GetAllAdminHardwareRequests()
        {
            var hardwareRequests = _unitOfWork.HardwareRequests.GetAllHardwareRequests();
            var hardwareRequestsModels = hardwareRequests.Select(hardwareRequest => HardwareRequestMapper.ToHardwareRequestModel(hardwareRequest)).ToList();
            return hardwareRequestsModels;
        }
        public List<HardwareRequestModel> GetAllUserHardwareRequests(int userId)
        {
            var hardwareRequests = _unitOfWork.HardwareRequests.GetAllByUserId(userId);
            var hardwareRequestsModels = hardwareRequests.Select(hardwareRequest => HardwareRequestMapper.ToHardwareRequestModel(hardwareRequest)).ToList();
            return hardwareRequestsModels;
        }

        public async Task DeleteHardwareRequest(int hardwareRequestId)
        {
            var hardwareRequest = await _unitOfWork.HardwareRequests.GetByIDAsync(hardwareRequestId);
            _unitOfWork.HardwareRequests.Delete(hardwareRequest);
            await _unitOfWork.CommitAsync();
        }

        public async Task<HardwareRequestModel> AddHardwareRequest(HardwareRequestModel hardwareRequestModel, int userId)
        {
            hardwareRequestModel.UserId = userId;
            var hardwareRequest = HardwareRequestMapper.ToHardwareRequest(hardwareRequestModel);
            await _unitOfWork.HardwareRequests.InsertAsync(hardwareRequest);
            await _unitOfWork.CommitAsync();
            hardwareRequestModel.Id = hardwareRequest.Id;
            hardwareRequestModel.StartDate = hardwareRequestModel.StartDate.GetValueOrDefault().ToLocalTime().AddSeconds(-hardwareRequestModel.StartDate.GetValueOrDefault().ToLocalTime().Second);
            hardwareRequestModel.EndDate = hardwareRequestModel.EndDate.GetValueOrDefault().ToLocalTime().AddSeconds(-hardwareRequestModel.EndDate.GetValueOrDefault().ToLocalTime().Second);
            return hardwareRequestModel;
        }

        public async Task<HardwareRequestModel> AcceptHardwareRequest(int hardwareRequestId, int newStatus, int adminId)
        {
            var hardwareRequest = _unitOfWork.HardwareRequests.GetById(hardwareRequestId);
            var admin = await _unitOfWork.Users.GetByIDAsync(adminId);
            hardwareRequest.Status = (RequestStatus)newStatus;
            hardwareRequest.AdminId = adminId;
            hardwareRequest.Admin = admin;
            await _unitOfWork.CommitAsync();
            var hardwareRequestModel = HardwareRequestMapper.ToHardwareRequestModel(hardwareRequest);
            return hardwareRequestModel;
        }
    }
}

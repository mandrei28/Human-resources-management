using HRDesk.Services.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace HRDesk.Services.ServiceInterfaces
{
    public interface IHardwareRequestService
    {
        List<HardwareRequestModel> GetAllAdminHardwareRequests();
        Task<HardwareRequestModel> AcceptHardwareRequest(int hardwareRequestId, int newStatus, int adminId);
        List<HardwareRequestModel> GetAllUserHardwareRequests(int userId);
        Task<HardwareRequestModel> AddHardwareRequest(HardwareRequestModel hardwareRequestModel, int userId);
        Task DeleteHardwareRequest(int hardwareRequestId);
    }
}

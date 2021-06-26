using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace HRDesk.Infrastructure.RepositoryInterfaces
{
    public interface IUnitOfWork : IDisposable
    {
        IUserRepository Users { get; }
        IFunctionRepository Functions { get; }
        ITeamRepository Teams { get; }
        ILeaveRequestRepository LeaveRequests { get; }
        IOfficeRepository Office { get; }
        INationalDayRepository NationalDays { get; }
        IMeetingRoomRepository MeetingRoom { get; }
        IUserPermissionRepository UserPermission { get; }
        IDayoffRepository Daysoff { get; }
        IMeetingRepository Meetings { get; }
        IHardwareRequestRepository HardwareRequests { get; }
        Task CommitAsync();
        Task BeginTransactionAsync();
        Task CommitTransactionAsync();
        Task RollbackTransactionAsync();
    }
}

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

        IOfficeRepository Office { get; }

        IUserPermissionRepository UserPermission { get; }
        Task CommitAsync();
        Task BeginTransactionAsync();
        Task CommitTransactionAsync();
        Task RollbackTransactionAsync();
    }
}

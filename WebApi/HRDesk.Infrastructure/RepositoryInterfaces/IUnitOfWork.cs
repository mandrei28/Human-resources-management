using System;
using System.Collections.Generic;
using System.Text;

namespace HRDesk.Infrastructure.RepositoryInterfaces
{
    public interface IUnitOfWork : IDisposable
    {
        IUserRepository Users { get; }
        void Commit();
    }
}

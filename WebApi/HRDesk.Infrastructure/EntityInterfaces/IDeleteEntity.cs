using HRDesk.Infrastructure.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace HRDesk.Infrastructure.EntityInterfaces
{
    public interface IDeleteEntity
    {
        bool IsDeleted { get; set; }
    }
    public interface IDeleteEntity<TKey> : IDeleteEntity, IAuditEntity<TKey>
    {
    }
}

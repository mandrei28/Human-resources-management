using HRDesk.Infrastructure.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace HRDesk.Infrastructure.EntityInterfaces
{
    public interface IAuditEntity
    {
        DateTime CreatedDate { get; set; }
        DateTime? UpdatedDate { get; set; }
    }
    public interface IAuditEntity<TKey> : IAuditEntity, IEntityBase<TKey>
    {
    }
}

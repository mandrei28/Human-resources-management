using HRDesk.Infrastructure.EntityInterfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace HRDesk.Infrastructure.Entities
{
    public abstract class DeleteEntity<TKey> : AuditEntity<TKey>, IDeleteEntity<TKey>
    {
        public bool IsDeleted { get; set; }
    }
}

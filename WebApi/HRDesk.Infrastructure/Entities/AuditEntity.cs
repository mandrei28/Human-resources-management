using HRDesk.Infrastructure.EntityInterfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace HRDesk.Infrastructure.Entities
{
    public abstract class AuditEntity<TKey> : EntityBase<TKey>, IAuditEntity<TKey>
    {
        public DateTime CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
    }
}

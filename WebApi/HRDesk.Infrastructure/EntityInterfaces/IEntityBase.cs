using System;
using System.Collections.Generic;
using System.Text;

namespace HRDesk.Infrastructure.Entities
{
    public interface IEntityBase<TKey>
    {
        TKey Id { get; set; }
    }
}

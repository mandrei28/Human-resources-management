using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace HRDesk.Infrastructure.Entities
{
    public class Poll : EntityBase<int>
    {
        public string Question { get; set; }
        public int? AdminId { get; set; }

        [ForeignKey("AdminId")]
        public User Admin { get; set; }
        public bool AllowMultiple { get; set; }
    }
}

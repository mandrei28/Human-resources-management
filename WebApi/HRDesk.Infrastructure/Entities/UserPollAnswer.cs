using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace HRDesk.Infrastructure.Entities
{
    public class UserPollAnswer : EntityBase<int>
    {
        public int? UserId { get; set; }

        [ForeignKey("UserId")]
        public User User { get; set; }
        public int? PollAnswerId { get; set; }

        [ForeignKey("PollAnswerId")]
        public PollAnswer PollAnswer { get; set; }
    }
}

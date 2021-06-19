using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace HRDesk.Infrastructure.Entities
{
    public class PollAnswer : EntityBase<int>
    {
        public string AnswerLetter { get; set; }
        public string AnswerText { get; set; }
        public int? PollId { get; set; }
        [ForeignKey("PollId")]
        public Poll Poll { get; set; }
    }
}

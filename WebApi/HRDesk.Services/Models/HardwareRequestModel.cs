using HRDesk.Infrastructure.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace HRDesk.Services.Models
{
    public class HardwareRequestModel
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public int? UserId { get; set; }
        public UserModel UserModel { get; set; }
        public int? AdminId { get; set; }
        public UserModel AdminModel { get; set; }
        public HardwareRequestType HardwareRequestType { get; set; }
        public string MadeBy { get; set; }
        public RequestStatus Status { get; set; }
    }
}

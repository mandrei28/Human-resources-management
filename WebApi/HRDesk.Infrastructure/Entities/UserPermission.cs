using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace HRDesk.Infrastructure.Entities
{
    public class UserPermission : AuditEntity<int>
    {
        public int? UserId { get; set; }
        [ForeignKey("UserId")]
        public User User { get; set; }

        public int? PermissionId { get; set; }

        [ForeignKey("PermissionId")]
        public Permission Permission { get; set; }
    }
}

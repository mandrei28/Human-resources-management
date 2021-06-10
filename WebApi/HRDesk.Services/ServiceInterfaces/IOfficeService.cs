using HRDesk.Services.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace HRDesk.Services.ServiceInterfaces
{
    public interface IOfficeService
    {
        List<OfficeModel> GetAllOffices();
        Task<OfficeModel> AddOffice(OfficeModel officeModel);
        Task DeleteOffice(int officeId);
        Task UpdateOffice(OfficeModel officeModel);
    }
}

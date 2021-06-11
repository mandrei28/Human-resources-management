using HRDesk.Services.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace HRDesk.Services.ServiceInterfaces
{
    public interface INationalDayService
    {
        List<NationalDayModel> GetAllNationalDays();
        Task<NationalDayModel> AddNationalDay(NationalDayModel nationalDayModel);
        Task DeleteNationalDay(int nationalDayId);
        Task<NationalDayModel> UpdateNationalDay(NationalDayModel nationalDayModel);
    }
}

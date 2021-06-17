using HRDesk.Services.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace HRDesk.Services.ServiceInterfaces
{
    public interface IDayoffService
    {
        List<DayoffModel> GetAllAdminDaysoff(int adminId);
        Task<DayoffModel> AcceptDayoff(int dayoffId, int newStatus, int adminId);
        List<HolidayCalendarComponentModel> GetHolidayCalendar(int userId);
        List<DayoffModel> GetAllUserDayoffs(int userId);
        Task<DayoffModel> AddDayoff(DayoffModel dayoffModel, int userId);
        Task DeleteDayoff(int dayoffId);
        DayoffChartModel GetNumberOfUsedHolidayDays(int userId);
    }
}

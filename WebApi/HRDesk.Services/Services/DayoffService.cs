using HRDesk.Infrastructure.Enums;
using HRDesk.Infrastructure.RepositoryInterfaces;
using HRDesk.Services.Mappers;
using HRDesk.Services.Models;
using HRDesk.Services.ServiceInterfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRDesk.Services.Services
{
    public class DayoffService : IDayoffService
    {
        private IUnitOfWork _unitOfWork;
        public DayoffService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public List<DayoffModel> GetAllAdminDaysoff(int adminId)
        {
            var dayoffs = _unitOfWork.Daysoff.GetAllByAdminId(adminId);
            var dayoffsModels = dayoffs.Select(dayoff => DayoffMapper.ToDayoffModel(dayoff)).ToList();
            return dayoffsModels;
        }

        public List<DayoffModel> GetAllUserDayoffs(int userId)
        {
            var dayoffs = _unitOfWork.Daysoff.GetAllByUserId(userId);
            var dayoffsModels = dayoffs.Select(dayoff => DayoffMapper.ToDayoffModel(dayoff)).ToList();
            return dayoffsModels;
        }

        public async Task<DayoffModel> AcceptDayoff(int dayoffId, int newStatus, int adminId)
        {
            var dayoff = await _unitOfWork.Daysoff.GetByIDAsync(dayoffId);
            var admin = await _unitOfWork.Users.GetByIDAsync(adminId);
            dayoff.Status = (RequestStatus)newStatus;
            dayoff.AdminId = adminId;
            dayoff.Admin = admin;
            await _unitOfWork.CommitAsync();
            var dayoffModel = DayoffMapper.ToDayoffModel(dayoff);
            return dayoffModel;
        }

        public async Task<DayoffModel> AddDayoff(DayoffModel dayoffModel, int userId)
        {
            if (dayoffModel.StartDate > dayoffModel.EndDate)
                throw new Exception("Invalid date range");

            dayoffModel.UserId = userId;
            dayoffModel.AdminId = dayoffModel.AdminModel.Id;
            var dayoff = DayoffMapper.ToDayoff(dayoffModel);

            var chartData = GetNumberOfUsedHolidayDays(userId);

            if (chartData.Used + ((dayoff.EndDate - dayoff.StartDate).Days + 1) > chartData.Total)
                throw new Exception("Too many days");

            await _unitOfWork.Daysoff.InsertAsync(dayoff);
            await _unitOfWork.CommitAsync();

            dayoffModel.Id = dayoff.Id;

            return dayoffModel;
        }

        public async Task DeleteDayoff(int dayoffId)
        {
            var dayoff = await _unitOfWork.Daysoff.GetByIDAsync(dayoffId);
            _unitOfWork.Daysoff.Delete(dayoff);
            await _unitOfWork.CommitAsync();
        }

        public List<HolidayCalendarComponentModel> GetHolidayCalendar(int userId)
        {
            var nationalDays = _unitOfWork.NationalDays.GetAll();
            var user = _unitOfWork.Users.GetUserById(userId);
            var daysoff = _unitOfWork.Daysoff.GetAllByUserTeamId(user.TeamId.Value);
            var holidayCalendarComponents = nationalDays.Select(n => new HolidayCalendarComponentModel
            {
                Title = n.Description + " - National Day",
                StartDate = n.StartDate,
                EndDate = n.EndDate,
            });
            var holidayDayoffComponents = daysoff.Select(n => new HolidayCalendarComponentModel
            {
                Title = n.Description + " - " + n.User.PersonalDetails.FirstName + " " + n.User.PersonalDetails.LastName,
                StartDate = n.StartDate,
                EndDate = n.EndDate,
            });
            return holidayCalendarComponents.Concat(holidayDayoffComponents).ToList();
        }

        public DayoffChartModel GetNumberOfUsedHolidayDays(int userId)
        {
            var year = 2021;
            var user = _unitOfWork.Users.GetUserById(userId);
            var userDayoffs = _unitOfWork.Daysoff.GetAllApprovedForUserByYear(userId, year).ToList();
            var nationalDays = _unitOfWork.NationalDays.GetAllByYear(year).ToList();
            var used = 0;
            foreach (var userDayoff in userDayoffs)
            {
                var start = userDayoff.StartDate;
                var end = userDayoff.EndDate;
                var days = (end - start).Days + 1;
                while (start <= end)
                {
                    if (days == 0)
                        break;
                    if (start.DayOfWeek == DayOfWeek.Saturday || start.DayOfWeek == DayOfWeek.Sunday)
                    {
                        days--;
                        start = start.AddDays(1);
                        continue;
                    }
                    if (nationalDays.Any(a => a.StartDate <= start && start <= a.EndDate))
                    {
                        days--;
                    }
                    start = start.AddDays(1);
                }
                used += days;
            }

            return new DayoffChartModel
            {
                Used = used,
                Total = user.CompanyDetails.NumberOfDaysoff,
            };
        }
    }
}

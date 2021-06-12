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
    }
}

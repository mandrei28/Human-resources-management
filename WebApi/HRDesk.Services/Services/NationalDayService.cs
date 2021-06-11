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
    public class NationalDayService : INationalDayService
    {
        private IUnitOfWork _unitOfWork;
        public NationalDayService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public List<NationalDayModel> GetAllNationalDays()
        {
            var nationalDays = _unitOfWork.NationalDays.GetAll();
            var nationalDaysModels = nationalDays.Select(nationalDay => NationalDayMapper.ToNationalDayModel(nationalDay)).ToList();
            return nationalDaysModels;
        }

        public async Task<NationalDayModel> AddNationalDay(NationalDayModel nationalDayModel)
        {
            var nationalDay = NationalDayMapper.ToNationalDay(nationalDayModel);
            await _unitOfWork.NationalDays.InsertAsync(nationalDay);
            await _unitOfWork.CommitAsync();
            nationalDayModel.Id = nationalDay.Id;
            nationalDayModel.CreationDate = nationalDay.CreatedDate;
            return nationalDayModel;
        }

        public async Task DeleteNationalDay(int nationalDayId)
        {
            var nationalDay = await _unitOfWork.NationalDays.GetByIDAsync(nationalDayId);
            _unitOfWork.NationalDays.Delete(nationalDay);
            await _unitOfWork.CommitAsync();
        }

        public async Task<NationalDayModel> UpdateNationalDay(NationalDayModel nationalDayModel)
        {
            var nationalDay = await _unitOfWork.NationalDays.GetByIDAsync(nationalDayModel.Id);
            var updatedNationalDay = NationalDayMapper.UpdateNationalDay(nationalDay, nationalDayModel);
            _unitOfWork.NationalDays.Update(updatedNationalDay);
            await _unitOfWork.CommitAsync();
            return nationalDayModel;
        }
    }
}

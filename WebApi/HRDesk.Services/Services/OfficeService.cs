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
    public class OfficeService : IOfficeService
    {
        private IUnitOfWork _unitOfWork;
        public OfficeService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public List<OfficeModel> GetAllOffices()
        {
            var offices = _unitOfWork.Office.GetAll();
            var officeModels = offices.Select(office => OfficeMapper.ToOfficeModel(office)).ToList();
            return officeModels;
        }
        public async Task<OfficeModel> AddOffice(OfficeModel officeModel)
        {
            var office = OfficeMapper.ToOffice(officeModel);
            await _unitOfWork.Office.InsertAsync(office);
            await _unitOfWork.CommitAsync();
            officeModel.Id = office.Id;
            officeModel.CreationDate = office.CreatedDate;
            return officeModel;
        }

        public async Task DeleteOffice(int officeId)
        {
            var office = await _unitOfWork.Office.GetByIDAsync(officeId);
            _unitOfWork.Office.Delete(office);
            await _unitOfWork.CommitAsync();
        }

        public async Task UpdateOffice(OfficeModel officeModel)
        {
            var office = await _unitOfWork.Office.GetByIDAsync(officeModel.Id);
            var updatedOffice = OfficeMapper.UpdateOffice(office, officeModel);
            _unitOfWork.Office.Update(updatedOffice);
            await _unitOfWork.CommitAsync();
        }
    }
}

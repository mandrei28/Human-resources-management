using HRDesk.Infrastructure.RepositoryInterfaces;
using HRDesk.Services.Mappers;
using HRDesk.Services.Models;
using HRDesk.Services.ServiceInterfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

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
    }
}

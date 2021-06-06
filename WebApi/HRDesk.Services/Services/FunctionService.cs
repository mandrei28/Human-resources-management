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
    public class FunctionService : IFunctionService
    {
        private IUnitOfWork _unitOfWork;
        public FunctionService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public List<FunctionModel> GetAllFunctions()
        {
            var functions = _unitOfWork.Functions.GetAll();
            var functionModels = functions.Select(function => FunctionMapper.ToFunctionModel(function)).ToList();
            return functionModels;
        }
    }
}

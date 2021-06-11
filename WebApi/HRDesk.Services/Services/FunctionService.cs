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

        public async Task<FunctionModel> AddFunction(FunctionModel functionModel)
        {
            var function = FunctionMapper.ToFunction(functionModel);
            await _unitOfWork.Functions.InsertAsync(function);
            await _unitOfWork.CommitAsync();
            functionModel.Id = function.Id;
            functionModel.CreationDate = function.CreatedDate;
            return functionModel;
        }

        public async Task DeleteFunction(int functionId)
        {
            var function = await _unitOfWork.Functions.GetByIDAsync(functionId);
            _unitOfWork.Functions.Delete(function);
            await _unitOfWork.CommitAsync();
        }

        public async Task UpdateFunction(FunctionModel functionModel)
        {
            var function = await _unitOfWork.Functions.GetByIDAsync(functionModel.Id);
            var updatedFunction = FunctionMapper.UpdateFunction(function, functionModel);
            _unitOfWork.Functions.Update(updatedFunction);
            await _unitOfWork.CommitAsync();
        }
    }
}

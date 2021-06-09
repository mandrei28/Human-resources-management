using HRDesk.Services.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace HRDesk.Services.ServiceInterfaces
{
    public interface IFunctionService
    {
        List<FunctionModel> GetAllFunctions();
        Task<FunctionModel> AddFunction(FunctionModel functionModel);
        Task DeleteFunction(int functionId);
        Task UpdateFunction(FunctionModel functionModel);
    }
}

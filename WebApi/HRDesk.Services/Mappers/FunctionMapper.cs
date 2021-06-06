using HRDesk.Infrastructure.Entities;
using HRDesk.Services.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace HRDesk.Services.Mappers
{
    public class FunctionMapper
    {
        public static FunctionModel ToFunctionModel(Function function)
        {
            return new FunctionModel()
            {
                Id = function.Id,
                Name = function.Name,
                Description = function.Description,
            };
        }

        public static Function ToFunction(FunctionModel functionModel)
        {
            return new Function()
            {
                Id = functionModel.Id,
                Name = functionModel.Name,
                Description = functionModel.Description,
            };
        }
    }
}

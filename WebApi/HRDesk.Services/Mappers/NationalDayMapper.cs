using HRDesk.Infrastructure.Entities;
using HRDesk.Services.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace HRDesk.Services.Mappers
{
    public class NationalDayMapper
    {
        public static NationalDayModel ToNationalDayModel(NationalDay nationalDay)
        {
            return new NationalDayModel()
            {
                Id = nationalDay.Id,
                Description = nationalDay.Description,
                StartDate = nationalDay.StartDate,
                EndDate = nationalDay.EndDate,
                CreationDate = nationalDay.CreatedDate.Date,
            };
        }

        public static NationalDay ToNationalDay(NationalDayModel nationalDayModel)
        {
            return new NationalDay()
            {
                // Id = nationalDayModel.Id,
                Description = nationalDayModel.Description,
                StartDate = nationalDayModel.StartDate,
                EndDate = nationalDayModel.EndDate,
            };
        }

        public static NationalDay UpdateNationalDay(NationalDay nationalDay, NationalDayModel nationalDayModel)
        {
            nationalDay.Description = nationalDayModel.Description;
            nationalDay.StartDate = nationalDayModel.StartDate.ToLocalTime();
            nationalDay.EndDate = nationalDayModel.EndDate.ToLocalTime();
            return nationalDay;
        }
    }
}

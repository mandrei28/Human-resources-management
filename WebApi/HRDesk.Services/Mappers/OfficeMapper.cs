﻿using HRDesk.Infrastructure.Entities;
using HRDesk.Services.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace HRDesk.Services.Mappers
{
    public class OfficeMapper
    {
        public static OfficeModel ToOfficeModel(Office office)
        {
            return new OfficeModel()
            {
                Id = office.Id,
                Name = office.Name,
                Capacity = office.Capacity,
                Location = office.Location,
                Number = office.Number
            };
        }

        public static Office ToOffice(OfficeModel officeModel)
        {
            return new Office()
            {
                Id = officeModel.Id,
                Name = officeModel.Name,
                Capacity = officeModel.Capacity,
                Location = officeModel.Location,
                Number = officeModel.Number
            };
        }
    }
}
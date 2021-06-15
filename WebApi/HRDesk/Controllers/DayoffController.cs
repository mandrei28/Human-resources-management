﻿using HRDesk.Services.Models;
using HRDesk.Services.ServiceInterfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HRDesk.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class DayoffController : Controller
    {
        private IDayoffService _dayoffService;
        private IIdentityService _identityService;
        public DayoffController(IDayoffService dayoffService, IIdentityService identityService)
        {
            _dayoffService = dayoffService;
            _identityService = identityService;
        }

        [Authorize]
        [HttpGet("getAllDaysoff")]
        public ActionResult<List<DayoffModel>> GetAllDaysoff()
        {
            var userId = _identityService.GetUserId();
            return _dayoffService.GetAllAdminDaysoff(userId.Value);
        }

        [Authorize]
        [HttpPut("approve/{dayoffId}")]
        public async Task<ActionResult<DayoffModel>> ApproveDayoff(int dayoffId, [FromBody] int newStatus)
        {
            var userId = _identityService.GetUserId();
            return await _dayoffService.AcceptDayoff(dayoffId, newStatus, userId.Value);
        }

        [Authorize]
        [HttpGet("getHolidayCalendar")]
        public List<HolidayCalendarComponentModel> GetHolidayCalendar()
        {
            var userId = _identityService.GetUserId();
            return _dayoffService.GetHolidayCalendar(userId.Value);
        }
    }
}

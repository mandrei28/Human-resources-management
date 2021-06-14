using HRDesk.Services.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace HRDesk.Services.ServiceInterfaces
{
    public interface IMeetingService
    {
        List<MeetingModel> GetAllMeetings();
        Task<MeetingModel> AddMeeting(MeetingModel meetingModel);

        List<MeetingModel> GetUpcoming10Meetings(int userId);
        Task DeleteMeeting(int meetingId);
        Task<MeetingModel> UpdateMeeting(MeetingModel meetingModel);
        List<MeetingModel> GetAllMeetingsBetweenRange(MeetingRangeRequest meetingRangeRequest, int userId);
    }
}

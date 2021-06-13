using HRDesk.Services.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace HRDesk.Services.ServiceInterfaces
{
    public interface IMeetingRoomService
    {
        List<MeetingRoomModel> GetAllMeetingRooms();
        Task<MeetingRoomModel> AddMeetingRoom(MeetingRoomModel meetingRoomModel);
        List<MeetingComponentModel> GetBookingMeetingRooms();
        Task DeleteMeetingRoom(int meetingRoomId);
        Task UpdateMeetingRoom(MeetingRoomModel meetingRoomModel);
    }
}

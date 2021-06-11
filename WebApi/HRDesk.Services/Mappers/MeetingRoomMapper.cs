using HRDesk.Infrastructure.Entities;
using HRDesk.Services.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace HRDesk.Services.Mappers
{
    public class MeetingRoomMapper
    {
        public static MeetingRoomModel ToMeetingRoomModel(MeetingRoom meetingRoom)
        {
            return new MeetingRoomModel()
            {
                Id = meetingRoom.Id,
                Name = meetingRoom.Name,
                Capacity = meetingRoom.Capacity,
                Location = meetingRoom.Location,
                Number = meetingRoom.Number,
                CreationDate = meetingRoom.CreatedDate,
            };
        }

        public static MeetingRoom ToMeetingRoom(MeetingRoomModel meetingRoomModel)
        {
            return new MeetingRoom()
            {
                // Id = meetingRoomModel.Id,
                Name = meetingRoomModel.Name,
                Capacity = meetingRoomModel.Capacity,
                Location = meetingRoomModel.Location,
                Number = meetingRoomModel.Number
            };
        }

        public static MeetingRoom UpdateMeetingRoom(MeetingRoom meetingRoom, MeetingRoomModel meetingRoomModel)
        {
            meetingRoom.Name = meetingRoomModel.Name;
            meetingRoom.Capacity = meetingRoomModel.Capacity;
            meetingRoom.Location = meetingRoomModel.Location;
            meetingRoom.Number = meetingRoomModel.Number;
            return meetingRoom;
        }
    }
}

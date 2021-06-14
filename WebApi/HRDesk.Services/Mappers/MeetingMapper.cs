using HRDesk.Infrastructure.Entities;
using HRDesk.Services.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace HRDesk.Services.Mappers
{
    public class MeetingMapper
    {
        public static MeetingModel ToMeetingModel(Meeting meeting)
        {
            return new MeetingModel()
            {
                Id = meeting.Id,
                Title = meeting.Title,
                RRule = meeting.RecurrenceRule,
                StartDate = meeting.StartDate,
                EndDate = meeting.EndDate,
                TeamId = meeting.TeamId.Value,
                RoomId = meeting.MeetingRoomId.Value,
                RoomName = meeting.MeetingRoom.Name,
                Notes = meeting.Notes,
            };
        }

        public static Meeting ToMeeting(MeetingModel meetingModel)
        {
            return new Meeting()
            {
                // Id = meetingModel.Id,
                Title = meetingModel.Title,
                RecurrenceRule = meetingModel.RRule,
                StartDate = meetingModel.StartDate.ToLocalTime().AddSeconds(-meetingModel.StartDate.ToLocalTime().Second),
                EndDate = meetingModel.EndDate.ToLocalTime().AddSeconds(-meetingModel.EndDate.ToLocalTime().Second),
                TeamId = meetingModel.TeamId,
                MeetingRoomId = meetingModel.RoomId,
                Notes = meetingModel.Notes,
            };
        }

        public static Meeting UpdateMeeting(Meeting meeting, MeetingModel meetingModel)
        {
            meeting.Title = meetingModel.Title != null ? meetingModel.Title : meeting.Title;
            meeting.RecurrenceRule = meetingModel.RRule != null ? meetingModel.RRule : meeting.RecurrenceRule;
            meeting.Notes = meetingModel.Notes != null ? meetingModel.Notes : meeting.Notes;
            meeting.StartDate = meetingModel.StartDate != null ? meetingModel.StartDate.ToLocalTime() : meeting.StartDate;
            meeting.EndDate = meetingModel.EndDate != null ? meetingModel.EndDate.ToLocalTime() : meeting.EndDate;
            meeting.TeamId = meetingModel.TeamId != null ? meetingModel.TeamId : meeting.TeamId;
            meeting.MeetingRoomId = meetingModel.RoomId != null ? meetingModel.RoomId : meeting.MeetingRoomId;
            return meeting;
        }
    }
}

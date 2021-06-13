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
    public class MeetingService : IMeetingService
    {
        private IUnitOfWork _unitOfWork;

        public MeetingService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public List<MeetingModel> GetAllMeetings()
        {
            var meetings = _unitOfWork.Meetings.GetAllMeetings();
            var meetingModels = meetings.Select(meeting => MeetingMapper.ToMeetingModel(meeting)).ToList();
            return meetingModels;
        }

        public async Task<MeetingModel> AddMeeting(MeetingModel meetingModel)
        {
            var meeting = MeetingMapper.ToMeeting(meetingModel);
            await _unitOfWork.Meetings.InsertAsync(meeting);
            await _unitOfWork.CommitAsync();
            meetingModel.Id = meeting.Id;
            return meetingModel;
        }

        public async Task DeleteMeeting(int meetingId)
        {
            var meeting = await _unitOfWork.Meetings.GetByIDAsync(meetingId);
            _unitOfWork.Meetings.Delete(meeting);
            await _unitOfWork.CommitAsync();
        }

        public async Task<MeetingModel> UpdateMeeting(MeetingModel meetingModel)
        {
            var meeting = await _unitOfWork.Meetings.GetByIDAsync(meetingModel.Id);
            var updatedMeeting = MeetingMapper.UpdateMeeting(meeting, meetingModel);
            _unitOfWork.Meetings.Update(updatedMeeting);
            await _unitOfWork.CommitAsync();
            return meetingModel;
        }
    }
}

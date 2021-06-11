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
    public class MeetingRoomService : IMeetingRoomService
    {
        private IUnitOfWork _unitOfWork;
        public MeetingRoomService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public List<MeetingRoomModel> GetAllMeetingRooms()
        {
            var meetingRooms = _unitOfWork.MeetingRoom.GetAll();
            var meetingRoomModels = meetingRooms.Select(meetingRoom => MeetingRoomMapper.ToMeetingRoomModel(meetingRoom)).ToList();
            return meetingRoomModels;
        }
        public async Task<MeetingRoomModel> AddMeetingRoom(MeetingRoomModel meetingRoomModel)
        {
            var meetingRoom = MeetingRoomMapper.ToMeetingRoom(meetingRoomModel);
            await _unitOfWork.MeetingRoom.InsertAsync(meetingRoom);
            await _unitOfWork.CommitAsync();
            meetingRoomModel.Id = meetingRoom.Id;
            meetingRoomModel.CreationDate = meetingRoom.CreatedDate;
            return meetingRoomModel;
        }

        public async Task DeleteMeetingRoom(int meetingRoomId)
        {
            var meetingRoom = await _unitOfWork.MeetingRoom.GetByIDAsync(meetingRoomId);
            _unitOfWork.MeetingRoom.Delete(meetingRoom);
            await _unitOfWork.CommitAsync();
        }

        public async Task UpdateMeetingRoom(MeetingRoomModel meetingRoomModel)
        {
            var meetingRoom = await _unitOfWork.MeetingRoom.GetByIDAsync(meetingRoomModel.Id);
            var updatedMeetingRoom = MeetingRoomMapper.UpdateMeetingRoom(meetingRoom, meetingRoomModel);
            _unitOfWork.MeetingRoom.Update(updatedMeetingRoom);
            await _unitOfWork.CommitAsync();
        }
    }
}

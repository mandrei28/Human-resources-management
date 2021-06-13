using HRDesk.Infrastructure;
using HRDesk.Infrastructure.Repositories;
using HRDesk.Infrastructure.RepositoryInterfaces;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRDesk.Infrastructure
{
    public class UnitOfWork : IUnitOfWork
    {

        private HRDeskDbContext _dbContext;
        private UserRepository _users;
        private FunctionRepository _functions;
        private TeamRepository _teams;
        private OfficeRepository _offices;
        private UserPermissionRepository _userPermissions;
        private MeetingRoomRepository _meetingRooms;
        private NationalDayRepository _nationalDays;
        private LeaveRequestRepository _leaveRequests;
        private DayoffRepository _daysoff;
        private MeetingRepository _meetings;

        public UnitOfWork(HRDeskDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public IUserRepository Users
        {
            get
            {
                return _users ??
                    (_users = new UserRepository(_dbContext));
            }
        }

        public IFunctionRepository Functions
        {
            get
            {
                return _functions ??
                    (_functions = new FunctionRepository(_dbContext));
            }
        }

        public ITeamRepository Teams
        {
            get
            {
                return _teams ??
                    (_teams = new TeamRepository(_dbContext));
            }
        }
        public IOfficeRepository Office
        {
            get
            {
                return _offices ??
                    (_offices = new OfficeRepository(_dbContext));
            }
        }
        public IUserPermissionRepository UserPermission
        {
            get
            {
                return _userPermissions ??
                    (_userPermissions = new UserPermissionRepository(_dbContext));
            }
        }

        public IMeetingRoomRepository MeetingRoom
        {
            get
            {
                return _meetingRooms ??
                    (_meetingRooms = new MeetingRoomRepository(_dbContext));
            }
        }

        public INationalDayRepository NationalDays
        {
            get
            {
                return _nationalDays ??
                    (_nationalDays = new NationalDayRepository(_dbContext));
            }
        }

        public ILeaveRequestRepository LeaveRequests
        {
            get
            {
                return _leaveRequests ??
                    (_leaveRequests = new LeaveRequestRepository(_dbContext));
            }
        }

        public IDayoffRepository Daysoff
        {
            get
            {
                return _daysoff ??
                    (_daysoff = new DayoffRepository(_dbContext));
            }
        }

        public IMeetingRepository Meetings
        {
            get
            {
                return _meetings ??
                    (_meetings = new MeetingRepository(_dbContext));
            }
        }

        public async Task BeginTransactionAsync()
        {
            await _dbContext.Database.BeginTransactionAsync();
        }

        public async Task CommitTransactionAsync()
        {
            await _dbContext.Database.CommitTransactionAsync();
        }

        public async Task RollbackTransactionAsync()
        {
            await _dbContext.Database.RollbackTransactionAsync();
        }

        public async Task CommitAsync()
        {
            await _dbContext.SaveChangesAsync();
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
        protected virtual void Dispose(bool disposing)
        {
            if (disposing)
            {
                _dbContext.Dispose();
            }
        }
    }
}
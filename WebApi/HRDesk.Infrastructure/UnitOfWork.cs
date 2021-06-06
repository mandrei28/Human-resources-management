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
        //private BaseRepository<Order> _orders;

        public UnitOfWork(HRDeskDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        //public IRepository<Customer> Customers
        //{
        //    get
        //    {
        //        return _customers ??
        //            (_customers = new BaseRepository<Customer>(_dbContext));
        //    }
        //}

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
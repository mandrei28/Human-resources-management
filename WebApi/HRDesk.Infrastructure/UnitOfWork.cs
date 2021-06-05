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
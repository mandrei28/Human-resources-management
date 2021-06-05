using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace HRDesk.Infrastructure.RepositoryInterfaces
{
    public interface IBaseRepository<TEntity> where TEntity : class
    {
        void Delete(TEntity entityToDelete);
        void Delete(object id);
        Task<TEntity> GetByIDAsync(object id);
        IQueryable<TEntity> GetAll();
        Task InsertAsync(TEntity entity);
        void Update(TEntity entityToUpdate);
    }
}
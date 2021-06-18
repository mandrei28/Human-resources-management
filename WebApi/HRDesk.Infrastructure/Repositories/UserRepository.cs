using HRDesk.Infrastructure.Entities;
using HRDesk.Infrastructure.Enums;
using HRDesk.Infrastructure.RepositoryInterfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRDesk.Infrastructure.Repositories
{
    public class UserRepository : BaseRepository<User>, IUserRepository
    {
        public UserRepository(HRDeskDbContext dbContext) : base(dbContext)
        {
        }
        public User GetUserByEmail(string email)
        {
            return GetAll()
                .Include(u => u.CompanyDetails)
                .Include(u => u.PersonalDetails)
                .Where(u => u.WorkEmail == email && !u.IsDeleted).FirstOrDefault();
        }

        public bool CheckIfEmailIsInUse(string email)
        {
            return GetAll()
                .Include(u => u.CompanyDetails)
                .Include(u => u.PersonalDetails)
                .Any(u => u.WorkEmail == email);
        }

        public async Task<User> GetByIDAsync(int id)
        {
            return await GetAll()
                   .Include(u => u.CompanyDetails)
                   .Include(u => u.PersonalDetails).FirstOrDefaultAsync(u => u.Id == id);
        }

        public User GetUserById(int id)
        {
            return GetAll()
                .Include(u => u.CompanyDetails)
                .Include(u => u.PersonalDetails)
                .Include(u => u.Team)
                .Include(u => u.Function)
                .Include(u => u.Office)
                .Where(u => u.Id == id && !u.IsDeleted).FirstOrDefault();
        }

        public IQueryable<User> GetUsers()
        {
            return GetAll()
                .Include(u => u.CompanyDetails)
                .Include(u => u.PersonalDetails)
                .Include(u => u.Team)
                .Include(u => u.Function)
                .Include(u => u.Office)
                .Where(u => !u.IsDeleted);
        }

        public IQueryable<User> GetAdmins()
        {
            return GetAll()
                .Include(u => u.CompanyDetails)
                .Include(u => u.PersonalDetails)
                .Include(a => a.Permissions)
                .Where(a => a.Permissions.Any(p => p.Id == (int)Permissions.ManageHolidays));
        }

        public int GetEmployeesNumber()
        {
            return GetAll().Where(u => !u.IsDeleted).Count();
        }
        public int GetBoardNumber()
        {
            return GetAll().Include(a => a.Function).Where(u => !u.IsDeleted && u.Function.Id == (int)PredefinedFunctions.Board).Count();
        }
        public int GetHumanResourceNumber()
        {
            return GetAll().Include(a => a.Function).Where(u => !u.IsDeleted && u.Function.Id == (int)PredefinedFunctions.HumanResource).Count();
        }
        public int GetProjectManagerNumber()
        {
            return GetAll().Include(a => a.Function).Where(u => !u.IsDeleted && u.Function.Id == (int)PredefinedFunctions.ProjectManager).Count();
        }
        public int GetDevelopersNumber()
        {
            return GetAll().Include(a => a.Function).Where(u => !u.IsDeleted && u.Function.Id == (int)PredefinedFunctions.Developer).Count();
        }
        public int GetQualityAssuranceNumber()
        {
            return GetAll().Include(a => a.Function).Where(u => !u.IsDeleted && u.Function.Id == (int)PredefinedFunctions.QualityAssurance).Count();
        }
    }
}

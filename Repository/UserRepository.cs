using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using mvc;

namespace Repository.Shared
{
    public class UserRepository : Repository<User>, IUserRepository
    {
        public UserRepository(CarDebateContext context) : base(context)
        {
        }

        // public Notification GetSome()
        // {
        //     throw new NotImplementedException();
        // }

        // Notification IRepository<Notification>.Get(int id)
        // {
        //     throw new NotImplementedException();
        // }

        // IEnumerable<Notification> IRepository<Notification>.GetAll()
        // {
        //     throw new NotImplementedException();
        // }

        

        public CarDebateContext MyContext
        {
            get { return Context as CarDebateContext; }
        }
    }
}
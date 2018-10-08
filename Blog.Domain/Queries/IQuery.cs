using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Blog.Domain.Queries
{

    public interface IQuery<T> 
    {
        Task<T> GetAsync();
    }
}

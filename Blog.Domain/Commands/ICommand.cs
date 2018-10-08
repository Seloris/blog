using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Blog.Domain.Commands
{
    public interface ICommand
    {
        Task SendAsync();
    }

    public interface ICommand<T> 
    {
        Task<T> SendAsync();
    }
}

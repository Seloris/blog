using System.Threading.Tasks;

namespace Blog.Domain.Commands
{
    public class CreatePostCommand : ICommand
    {
        public string Data { get; set; }

        public CreatePostCommand()
        {

        }

        public void WithPost(string data)
        {
            Data = data;
        }

        public Task SendAsync()
        {
            return Task.FromResult(1);
        }

    }
}

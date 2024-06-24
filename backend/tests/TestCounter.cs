using Microsoft.Extensions.Logging;
using Xunit;
using System.Threading.Tasks;

namespace tests
{
    public class TestCounter
    {
        private readonly ILogger logger = TestFactory.CreateLogger();

        [Fact]
        public async Task Http_trigger_should_return_known_string()
        {
            // Arrange
            var counter = new Company.Function.Counter();
            counter.Id = "index";
            counter.Count = 2;
            var request = TestFactory.CreateHttpRequest();

            // Act
            var response = await Company.Function.GetResumeCounter.Run(request, counter, logger);

            // Assert
            Assert.Equal(3, counter.Count); // Adjust based on actual expected outcome
        }
    }
}

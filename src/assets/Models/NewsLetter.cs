using System.ComponentModel.DataAnnotations;

namespace CylProject.Models
{
    public class NewsLetter
    {
        [Key]
        public int ID { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
    }
}


using System.ComponentModel.DataAnnotations;

namespace CylProject.Models
{
    public class QuickContactcs
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Requirement { get; set; }
        public bool ContectMe { get; set; }
    }
}
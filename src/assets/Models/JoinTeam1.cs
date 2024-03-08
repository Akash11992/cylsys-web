using System.ComponentModel.DataAnnotations;
using System.Web;

namespace CylProject.Models
{
    public class JoinTeam1
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Position { get; set; }
        public string ImagePath { get; set; }
        public HttpPostedFileBase Filedata { get; set; }
        public string Requirement { get; set; }
        public bool ContactMe { get; set; }
    }
}
using System.Reflection.Metadata;

namespace Diary.Entities
{
    public class DiaryEn
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public string Description { get; set; } = string.Empty;
        public int ContactId { get; set; }
        public ContactEn? Contact { get; set; }
    }
}

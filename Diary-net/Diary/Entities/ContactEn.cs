using System.Reflection.Metadata;

namespace Diary.Entities
{
    public class ContactEn
    {
        public int Id { get; set; }
        public string Names{ get; set; } = string.Empty;
        public string Surnames { get; set; } = string.Empty;
        public string CellPhone { get; set;} = string.Empty;
        public string Location { get; set;} = string.Empty;
        public List<DiaryEn> Diary { get; set; } = new List<DiaryEn>();

    }
}

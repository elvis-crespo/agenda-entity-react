namespace Diary.DTOs
{
    public class DiaryCreationDTO
    {
        public DateTime Date { get; set; }
        public string Description { get; set; } = string.Empty;
        public int ContactId { get; set; }
    }
}

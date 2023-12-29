using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Diary.Entities.Settings
{
    public class DiaryEnSetting : IEntityTypeConfiguration<DiaryEn>
    {
        public void Configure(EntityTypeBuilder<DiaryEn> builder)
        {
            builder.Property(descrip => descrip.Description).HasMaxLength(500);
        }
    }
}

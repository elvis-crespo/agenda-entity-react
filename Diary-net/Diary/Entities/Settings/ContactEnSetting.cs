using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Diary.Entities.Settings
{
    public class ContactEnSetting : IEntityTypeConfiguration<ContactEn>
    {
        public void Configure(EntityTypeBuilder<ContactEn> builder)
        {
            builder.Property(n => n.Names).HasMaxLength(50);
            builder.Property(s => s.Surnames).HasMaxLength(50);
            builder.Property(c => c.CellPhone).HasMaxLength(10);
            builder.Property(l => l.Location).HasMaxLength(30);
        }
    }
}

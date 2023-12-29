using AutoMapper;
using Diary.DTOs;
using Diary.Entities;

namespace Diary.Utilities
{
    public class AutoMapper:Profile
    {
        public AutoMapper()
        {
            CreateMap<ContactCreationDTO, ContactEn>();
            CreateMap<DiaryCreationDTO, DiaryEn>();
        }
    }
}

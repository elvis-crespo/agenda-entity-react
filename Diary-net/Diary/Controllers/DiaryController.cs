using AutoMapper;
using Diary.Context;
using Diary.DTOs;
using Diary.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.SqlServer.Server;
using System.Collections.Immutable;
using System.Collections.Specialized;
using System.Linq;

namespace Diary.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DiaryController : ControllerBase
    {
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;

        public DiaryController(ApplicationDbContext context, IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
        }

        [HttpPost("add")]
        public async Task<ActionResult> Post(DiaryCreationDTO diaryCreationDTO)
        {

            var Diary = mapper.Map<DiaryEn>(diaryCreationDTO);

            context.Add(Diary);
            await context.SaveChangesAsync();
            return Ok(Diary);
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<IEnumerable<DiaryEn>>> Get(int id) 
        {
            var diarysForID = await context.Diary.Where(a => a.ContactId == id).ToListAsync();

            if (!diarysForID.Any())
            {
                return NotFound();
            }
            return Ok(diarysForID);
        }

        [HttpGet("current")]
        public async Task<ActionResult<IEnumerable<DiaryEn>>> GetDate(DateTime date)
        {
           
            var current = await context.Diary.AnyAsync(a => a.Date.Date == date);

            if (current)
            {
                var appointmentToday = await context.Diary.Where(a => a.Date.Date == date).ToListAsync();
                return Ok(appointmentToday);

            }
            else 
            {
                string message = "No hay citas para el día de hoy";
                return NotFound(message);
            }
        }
    }
}

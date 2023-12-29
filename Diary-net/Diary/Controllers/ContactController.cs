using AutoMapper;
using Diary.Context;
using Diary.DTOs;
using Diary.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Diary.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;

        public ContactController(ApplicationDbContext context, IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
        }

        [HttpPost("add-contact")]
        public async Task<ActionResult> Post(ContactCreationDTO contactCreationDTO) 
        {
            var contacts = mapper.Map<ContactEn>(contactCreationDTO);
            context.Add(contacts);
            await context.SaveChangesAsync();   
            return Ok(contacts);
        }

        [HttpGet("search-name")]
        public async Task<ActionResult<IEnumerable<ContactEn>>> Get(string name)
        {
            return await context.Contacts.Where(a => a.Names.Contains(name)).ToListAsync();
        }
        [HttpGet("name")]
        public async Task<ActionResult<IEnumerable<ContactEn>>> Get()
        {
            return await context.Contacts.ToListAsync();
        }
    }
}

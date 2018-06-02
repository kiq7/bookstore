using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using BookStore.API.ViewModels;
using BookStore.Domain.Entities;
using BookStore.Domain.Interfaces.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BookStore.API.Controllers
{
    public class BookController : Controller
    {
        private readonly IBookService _service;
        private readonly IMapper _mapper;

        public BookController(IBookService service, IMapper mapper)
        {
            _service = service;
            _mapper = mapper;
        }

        [HttpGet]
        [AllowAnonymous]
        [Route("v1/books")]
        public IActionResult Get()
        {
            var books = _service.GetAll().ToList();

            return Ok(_mapper.Map<List<BookViewModel>>(books));
        }

        [HttpGet]
        [AllowAnonymous]
        [Route("v1/books/{isbn}")]
        public IActionResult GetByIsbn(string isbn)
        {
            var book = _service.GetByIsbn(isbn);

            return Ok(_mapper.Map<BookViewModel>(book));
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("v1/books")]
        public IActionResult Post([FromBody] BookViewModel bookViewModel)
        {
            var book = _mapper.Map<Book>(bookViewModel);

            if (book.Valid)
            {
                _service.Add(book);
                return Json(bookViewModel);
            }

            return Json(new
            {
                Messages = book.Notifications
            });

        }

        [HttpPut]
        [AllowAnonymous]
        [Route("v1/books/{isbn}")]
        public IActionResult Update([FromBody] BookViewModel bookViewModel)
        {
            var book = _mapper.Map<Book>(bookViewModel);

            if (book.Valid)
            {
                _service.Update(book);

                return Json(bookViewModel);
            }

            return Json(new
            {
                errormessage = book.Notifications
            });
        }

        [HttpDelete]
        [AllowAnonymous]
        [Route("v1/books/{isbn}")]
        public IActionResult Delete(string isbn)
        {
            _service.Remove(isbn);

            return Json("Excluído com sucesso");
        }
    }
}

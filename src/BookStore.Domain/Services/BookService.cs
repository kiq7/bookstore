using System.Collections.Generic;
using BookStore.Domain.Entities;
using BookStore.Domain.Interfaces.Repository;
using BookStore.Domain.Interfaces.Services;

namespace BookStore.Domain.Services
{
    public class BookService : IBookService
    {
        private readonly IBookRepository _repository;

        public BookService(IBookRepository repository)
        {
            _repository = repository;
        }

        public void Add(Book book)
        {
            _repository.Add(book);
            _repository.SaveChanges();
        }

        public Book GetByIsbn(string isbn)
        {
            return _repository.GetByIsbn(isbn);
        }

        public IEnumerable<Book> GetAll()
        {
            return _repository.GetAll();
        }

        public void Update(Book book)
        {
            _repository.Update(book);
            _repository.SaveChanges();
        }

        public void Remove(string isbn)
        {
            _repository.Remove(isbn);
            _repository.SaveChanges();
        }
    }
}
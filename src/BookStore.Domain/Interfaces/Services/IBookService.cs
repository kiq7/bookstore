using System.Collections.Generic;
using BookStore.Domain.Entities;

namespace BookStore.Domain.Interfaces.Services
{
    public interface IBookService
    {
        void Add(Book book);
        Book GetByIsbn(string isbn);
        IEnumerable<Book> GetAll();
        void Update(Book book);
        void Remove(string isbn);
    }
}
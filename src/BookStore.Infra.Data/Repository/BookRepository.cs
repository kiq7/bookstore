using System;
using System.Collections.Generic;
using System.Linq;
using BookStore.Domain.Entities;
using BookStore.Domain.Interfaces.Repository;
using BookStore.Infra.Data.Context;
using Microsoft.EntityFrameworkCore;

namespace BookStore.Infra.Data.Repository
{
    public class BookRepository : IBookRepository
    {
        public BookRepository(BookStoreContext context)
        {
            _db = context;
            _dbSet = _db.Set<Book>();
        }

        private readonly BookStoreContext _db;
        private readonly DbSet<Book> _dbSet;


        public virtual void Add(Book book)
        {
            _dbSet.Add(book);
        }

        public Book GetByIsbn(string isbn)
        {
            return _dbSet.AsNoTracking().FirstOrDefault(x => x.Isbn == isbn);
        }

        public virtual IEnumerable<Book> GetAll()
        {
            return _dbSet;
        }

        public virtual void Update(Book book)
        {
            _db.Entry(book).State = EntityState.Modified;
            _dbSet.Update(book);
        }

        public virtual void Remove(string isbn)
        {
            _dbSet.Remove(_dbSet.Find(isbn));
        }

        public int SaveChanges()
        {
            return _db.SaveChanges();
        }

        public void Dispose()
        {
            _db.Dispose();
            GC.SuppressFinalize(this);
        }
    }
}

using Flunt.Notifications;
using Flunt.Validations;
using System;

namespace BookStore.Domain.Entities
{
    public class Book : Notifiable
    {
        public Book(string title, string isbn, string author, string publisher)
        {
            Isbn = isbn;
            Title = title;
            Author = author;
            Publisher = publisher;
            CreateDate = DateTime.Now;

            AddNotifications(new Contract()
                .Requires()
                .IsNotNull(Title, "Title", "Titulo não pode ser vazio")
                .IsNotNull(Isbn, "Isbn", "Isbn não pode ser vazio")
                .IsNotNull(Author, "Author", "Autor não pode ser vazio")
                .IsNotNull(Publisher, "Publisher", "Editora não pode ser vazio")
                .HasMinLen(Title, 2, "Title", "Titulo deve conter pelo menos 2 caracteres")
                .HasMaxLen(Title, 100, "Title", "Titulo não pode conter mais que 100 caracteres")
                .HasMinLen(Isbn, 10, "Isbn", "Isbn deve conter pelo menos 10 caracteres")
                .HasMaxLen(Isbn, 13, "Isbn", "Isbn não pode conter mais que 100 caracteres")
                .HasMinLen(Author, 2, "Author", "Autor deve conter pelo menos 2 caracteres")
                .HasMaxLen(Author, 20, "Author", "Autor não pode conter mais que 100 caracteres"));
        }

        public Book()
        {

        }

        public string Isbn { get; private set; }
        public string Title { get; private set; }
        public string Author { get; private set; }
        public string Publisher { get; private set; }
        public DateTime CreateDate { get; private set; }

        public void ChangeTitle(string title)
        {
            Title = title;
        }
    }
}

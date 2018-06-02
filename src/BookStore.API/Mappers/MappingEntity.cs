using AutoMapper;
using BookStore.API.ViewModels;
using BookStore.Domain.Entities;

namespace BookStore.API.Mappers
{
    public class MappingEntity : Profile
    {
        public MappingEntity()
        {
            CreateMap<BookViewModel, Book>();
            CreateMap<Book, BookViewModel>();
        }
    }
}

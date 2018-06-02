using BookStore.Domain.Entities;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace BookStore.Domain.Tests
{
    [TestClass]
    public class UnitTest1
    {
        [TestClass]
        public class BookTests
        {
            [TestMethod]
            [TestCategory("Book - New Book")]
            public void GivenAnEmptyTitleShouldReturnANotification()
            {
                var book = new Book(string.Empty, "9785459008586", "Robert C. Martin", "Prentice Hall");
                Assert.IsFalse(book.Valid);
            }

            [TestMethod]
            [TestCategory("Book - New Book")]
            public void GivenAnShortTitleShouldReturnANotification()
            {
                var book = new Book("C", "9785459008586", "Robert C. Martin", "Prentice Hall");
                Assert.IsFalse(book.Valid);
            }

            [TestMethod]
            [TestCategory("Book - New Book")]
            public void GivenAnLongTitleShouldReturnANotification()
            {
                var book = new Book("Clean code Clean code Clean code Clean code Clean code Clean code Clean code Clean code Clean code Clean code ", 
                                    "9785459008586", "Robert C. Martin", "Prentice Hall");

                Assert.IsFalse(book.Valid);
            }

            [TestMethod]
            [TestCategory("Book - New Book")]
            public void GivenAnEmptyIsbnShouldReturnANotification()
            {
                var book = new Book("Clean Code", string.Empty, "Robert C. Martin", "Prentice Hall");
                Assert.IsFalse(book.Valid);
            }

            [TestMethod]
            [TestCategory("Book - New Book")]
            public void GivenAnShortIsbnShouldReturnANotification()
            {
                var book = new Book("Clean Code", "000000000", "Robert C. Martin", "Prentice Hall");
                Assert.IsFalse(book.Valid);
            }

            [TestMethod]
            [TestCategory("Book - New Book")]
            public void GivenAnLongIsbnShouldReturnANotification()
            {
                var book = new Book("Clean code ", "00000000000000", "Robert C. Martin", "Prentice Hall");

                Assert.IsFalse(book.Valid);
            }
        }
    }
}

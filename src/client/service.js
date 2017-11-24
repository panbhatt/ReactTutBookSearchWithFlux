import Data from './data' ;

module.exports.save = (bookData) => {

      Data.currentId++;
      Data.books.push({
        id : Data.currentId,
        title : bookData.title,
        category : bookData.category
      })
      console.log("Added the book. ") ;
}

module.exports.delete = (bookData) => {


      Data.books = Data.books.filter( (el) => return bookData.id != el.id ) ;
      console.log("Deleted the book. ") ;
}

module.exports.edit = (bookData) => {


      Data.books = Data.books.map( (book) {
          if(book.id == bookData.id) {
              book.title = bookData.title;
              book.category = bookdata.category;
          }
          return book;

      } ) ;
      console.log("Deleted the book. ") ;
}

module.exports.books = Data.books;
module.exports.editingBook = Data.editingBook;
module.exports.search = Data.search;
module.exports.message = Data.message;

import BookConstants from './constants';
import {AppDispatcher} from './actions' ;
import { EventEmitter } from 'events' ;
import Data from './data' ;

class AppStore extends EventEmitter {
    getState() {
      return _state;
    }
    emitChange() {
      this.emit('change') ;
    }
    addChangeListener(callback)  {
      this.on('change',callback) ;
    }
    removeChangeListener(callback){
      this.removeListener('change',callback) ;
    }
}

var BookStore = new AppStore();
let _state = {
  currentBook : {},
  books :  Data.books.slice(),
  bookList :  Data.books.slice(),
  currentId :  Data.currentId
};

let _searchBook = (searchText) => {
      console.log("Search Function in store.js") ;
      _state.books = _state.bookList.filter((book) => book.title.toLowerCase().includes(searchText.toLowerCase()) ||
                                                 book.category.toLowerCase().includes(searchText.toLowerCase())    )
      BookStore.emitChange();
};

let _reloadBooks = ()=> {
  console.log("Starting the loading of the books.") ;
  _state = {
    currentBook : {},
    books :  Data.books.slice(),
    bookList :  Data.books.slice(),
    currentId :  Data.currentId
  };

}

let _addBook = (newBook)=> {
  console.log("Calling STORE Add FUNCTION ") ;
  let bookObj = { id : ++_state.currentId,
    ...newBook
  };
  _state.books.push(bookObj) ;
  _state.bookList.push(bookObj)
  BookStore.emitChange();
}

let _editBook = (id)=> {

  let bookObj = _state.books.filter((book)=> book.id == id );
  console.log(JSON.stringify(bookObj[0])) ;
  _state.currentBook = bookObj[0];
  BookStore.emitChange();
}

AppDispatcher.register((action)=> {

    switch(action.actionType) {
        case BookConstants.SEARCH_BOOKS :
          console.log("COMING IN THE SEARCH BOOK FLUX Function") ;
          _searchBook(action.searchText) ;
          break;
        case BookConstants.ADD_BOOK :
          console.log("COMING IN THE ADD BOOK FLUX Function") ;
          _addBook( { title : action.title,
                      category : action.category });
          break;
        case BookConstants.EDIT_LINK_UPDATE :
          console.log("COMING IN THE EDIT BOOK FLUX Function") ;
          _editBook( action.id);
          break;

    }

});

module.exports.BookStore = BookStore;
module.exports.reloadBooks = _reloadBooks;

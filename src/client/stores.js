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
      console.log("Adding Change listeners") ;
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

AppDispatcher.register((action)=> {

    switch(action.actionType) {
        case BookConstants.SEARCH_BOOKS :
          console.log("COMING IN THE SEARCH BOOK FLUX Function") ;
          _searchBook(action.searchText) ;
          break;
        case BookConstants.ADD_BOOK :
          console.log("COMING IN THE ADD BOOK FLUX Function") ;
          break;

    }

});

module.exports.BookStore = BookStore;
module.exports.reloadBooks = _reloadBooks;

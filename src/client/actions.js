import {Dispatcher} from 'flux' ;
import BookConstants from './constants' ;

var AppDispatcher = new Dispatcher();

var BookActions = {

      search(searchText) {
        console.log("CMING HERE in action.js searchbox") ;
        AppDispatcher.dispatch({
            actionType : BookConstants.SEARCH_BOOKS,
            searchText
        });
      },

    add(data) {
      console.log("CMING HERE in action.js add book function") ;
        AppDispatcher.dispatch({
        actionType : BookConstants.ADD_BOOK,
        ...data
        });
      },

      editBook(bookId) {
        console.log("CMING HERE in action.js EDIT book function") ;
          AppDispatcher.dispatch({
          actionType : BookConstants.EDIT_LINK_UPDATE,
          id : bookId
          });
        },

      update(data) {
        AppDispatcher.dispatch({
        actionType : BookConstants.UPDATE_BOOK,
        ...data
        });
      },

}

module.exports.BookActions = BookActions;
module.exports.AppDispatcher = AppDispatcher;

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

      update(data) {
        AppDispatcher.dispatch({
        actionType : BookConstants.UPDATE_BOOK,
        ...data
        });
      },

      add(data) {
        AppDispatcher.dispatch({
        actionType : BookConstants.ADD_BOOK,
        ...data
        });
      }

}

module.exports.BookActions = BookActions;
module.exports.AppDispatcher = AppDispatcher;

import React from 'react';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Panel from 'muicss/lib/react/panel';
import Divider from 'muicss/lib/react/divider';

import SearchBox from './../searchbox' ;
import BookList from './../booklist' ;
import CrudBook from './../crudbook' ;

import { BookStore} from './../../stores' ;


export default class Home extends React.Component {

    constructor(props) {
      super(props);
      this.onChange = this.onChange.bind(this);

      this.state = BookStore.getState();
    }

    onChange() {
       this.setState( BookStore.getState() );
   }

   componentDidMount() {
     BookStore.addChangeListener(this.onChange) ;
   }

   componentWillUnmount() {
     BookStore.removeChangeListener(this.onChange) ;
   }

    render(){


      return (
        <Row>

              <Col md="8">
                <Panel>
                  <Row>
                    <SearchBox onChange={this.handleSearchClick}/>
                  </Row>
                  <Row>
                    <BookList onEdit={this.handleEditClick}  books={this.state.books}/>
                  </Row>
                  <Row>
                    { this.state.message && this.state.messageType == "danger"? <div className="mui--text-danger">{this.state.message}</div> : ""}
                    { this.state.message && this.state.messageType == "primary "? <div className="mui--text-primary">{this.state.message}</div> : ""}
                  </Row>
                </Panel>
              </Col>

              <Col md="4">
                <CrudBook book={this.state.currentBook} onDelete={this.handleBookDelete} onUpdate={this.handleBookUpdate} onAdd={this.handleBookAdd}/>
              </Col>
        </Row>
      );
    }

    handleSearchClick(searchText){
        console.log("I am clickined  with value " + searchText) ;
        this.setState({
            currentId : this.state.currentId,
            bookList  : this.state.books.slice(),
            books : this.state.bookList.filter((book) => book.title.toLowerCase().includes(searchText.toLowerCase()) ||
                                                       book.category.toLowerCase().includes(searchText.toLowerCase())    )
        });
    }

    handleEditClick(id){
        console.log("Edit is clicked clickined  with id " + id) ;
        var books = this.state.books.filter((book) => book.id === id) ;
        console.log("Got Books = " + JSON.stringify(books)) ;
        if(books.length > 0 ) {
          this.setState( { currentBook : books[0] }) ;
          console.log(" I M COMING HERE") ;
      }
    }

    handleBookDelete(id) {
      console.log("Coming in Handling delete") ;
        let books = this.state.books.filter((book) => book.id !== id) ;
        let message= "Book Id : " + id + " has been sucessfully deleted." ;
        let messageType = "danger" ;
        let currentBook = undefined;
        let bookList = books.slice();
        this.setState({ books , message, currentBook, bookList })
    }

    handleBookUpdate(updatedBook) {
      console.log("Coming in Handling Book Update") ;
        let currentBook = undefined;
        let books = this.state.books.map((book) => {
              if(book.id == updatedBook.id) {
                 book.title = updatedBook.title;
                 currentBook = book ;
               }
                 return book ;
        }) ;
        let message= "Book title " + currentBook.title + "  has been sucessfully Updated to ."  + updatedBook.title;
        let messageType = "primary" ;
        this.setState({ books , message, currentBook , messageType})
    }

    handleBookAdd(newBook) {
        var newState = {
            currentId : ++this.state.currentId,
            currentBook : {},
            books : this.state.books,
            bookList : this.state.books.slice(),
        };
        let bookObj = {
          id : newState.currentId,
          ...newBook
        }

        newState.books.push(bookObj) ;
        newState.bookList.push(bookObj)
        this.setState(newState);
    }
}

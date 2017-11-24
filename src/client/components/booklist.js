import React from 'react';

import {BookActions} from './../actions' ;

export default class BookList extends React.Component {

    constructor(props){
      super(props);
      this.handleEdit = this.handleEdit.bind(this);

    }

    handleEdit(event,id) {
        event.preventDefault();
        BookActions.editBook(id); 
    }

    render(){
      return(
        <table className="mui-table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Title </th>
                <th>Category </th>
                <th>Action </th>
              </tr>
            </thead>
            <tbody>
              {this.props.books.map((book)=>{
                  return (<tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td>{book.category}</td>
                            <td><a onClick={(e) => {this.handleEdit(e,book.id)}}>Edit</a></td>
                        </tr>);
              })}

            </tbody>
         </table>
      );
    }


}

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
                    <SearchBox />
                  </Row>
                  <Row>
                    <BookList  books={this.state.books}/>
                  </Row>
                  <Row>
                    { this.state.message && this.state.messageType == "danger"? <div className="mui--text-danger">{this.state.message}</div> : ""}
                    { this.state.message && this.state.messageType == "primary "? <div className="mui--text-primary">{this.state.message}</div> : ""}
                  </Row>
                </Panel>
              </Col>

              <Col md="4">
                <CrudBook book={this.state.currentBook} />
              </Col>
        </Row>
      );
    }



}

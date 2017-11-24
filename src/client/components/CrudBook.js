import React from 'react';

import Panel from 'muicss/lib/react/panel';
import Form from 'muicss/lib/react/form';
import Option from 'muicss/lib/react/option';
import Select from 'muicss/lib/react/select';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';

export default class CrudBook extends React.Component {

  constructor(props) {
    super(props);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.state = {
          title : 'Book Title',
          bookPresent : false
    } ;
  }

  onTitleChange(ev){
    this.setState({title: ev.target.value});
  }

  componentWillReceiveProps(newProps) {
    this.setState({ title :newProps.book && newProps.book.id >=0 ? newProps.book.title : "Title" ,
                    bookPresent : newProps.book && newProps.book.id  >=0
                    })
  }

  handleCancel(ev){
    this.setState({
          title : 'Book Title',
          bookPresent : false
    });
  }

  handleDelete(ev,id){
      ev.preventDefault();
      this.setState({
            title : 'Book Title',
            bookPresent : false
      });
      this.props.onDelete(id);

  }

  handleUpdate(ev,id){
      ev.preventDefault();
      var updateBook = {
            id ,
            title :    this.titleInput.controlEl.value
          } ;
      this.props.onUpdate(updateBook);

  }

  handleAdd(ev){
      ev.preventDefault();
      var newBook = {
            title :    this.titleInput.controlEl.value,
            category : this.categoryInput.controlEl.value
          } ;
          console.log(newBook) ;
      this.props.onAdd(newBook);

  }

  render() {
    return (
      <Panel>
          <Form>
            <Input label="Book Title" required={true} value={this.state.title} ref={el => { this.titleInput = el;} } onChange={this.onTitleChange.bind(this)}/>
             <Select name="input" label="Select Category" defaultValue="option2" ref={el => { this.categoryInput= el;} }>
              <Option value="Fiction" label="Fiction" />
              <Option value="Fantasy" label="Fantasy" />
              <Option value="Action" label="Action" />
              <Option value="Romance" label="Romance" />
              </Select>

              {this.state.bookPresent ?  "" : <Button color="primary"  onClick= { ev => {this.handleAdd(ev)}}>Add </Button> }
              {this.state.bookPresent ? <Button color="primary" variant="raised" onClick= { ev => {this.handleUpdate(ev,this.props.book.id)}}>Update </Button> : "" }
              {this.state.bookPresent ? <Button color="primary" variant="raised" onClick= {this.handleCancel}>Cancel </Button> : "" }
              {this.state.bookPresent ? <Button color="danger" variant="raised" onClick= { ev => {this.handleDelete(ev,this.props.book.id)}}>Delete </Button> : "" }

          </Form>
      </Panel>
    );
  }

}

import { Component } from 'react';

class ToDoList extends Component {
    constructor(props){
      super(props);
      
      this.state = {
        todo: [],
        done: [],
        input: ''
      }
      
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event){
      this.setState({
        input: event.target.value
      });
    }
    
    handleSubmit(event){
      event.preventDefault();
      if(this.state.input !== ''){
        const newItem = {
          id: Date.now(),
          text: this.state.input
        };
      this.setState(prevState => ({
        todo: prevState.todo.concat(newItem),
        input: ''
      }));
      }
    }
    
    undoItem = index => {
      this.setState({
        todo: this.state.todo.concat(this.state.done[index]),
        done: this.state.done.filter((item, key) => key !== index)
      });
    };
    
    doItem = index => {
      this.setState({
        done: this.state.done.concat(this.state.todo[index]),
        todo: this.state.todo.filter((item, key) => key !== index)
      });
    };
  
    deleteToDoItem = (index) => {
      this.setState({
        todo: this.state.todo.filter((item, key) => key !== index)
      });
    }
  
    deleteDoneItem = (index) => {
      this.setState({
        done: this.state.done.filter((item, key) => key !== index),
      });
    }
    
    render(){
      return (
        <div className="todo-container">
          
          <div className="todo-heading">
            <div className="todo-heading-circle">
              <i classname="fas fa-check"></i>
            </div>
            <h1 className="todo-heading-text">To Do List</h1>
          </div>
          
          <div className="todo-add">
            <hr className="todo-subheading"></hr>
            <form className="todo-add-form" onSubmit={this.handleSubmit}>
              <label className="todo-add-label" htmlFor="add-item">What do you want to do?</label>
              <input id="add-item" className="todo-add-item" type="text" value={this.state.input} onChange={this.handleChange} placeholder="Clean my room"/>
              <button className="todo-add-submit-item" type="submit">Add</button>
            </form>
          </div>
          
          <div className="todo-lists-container">
            <div className="todo-list-container">
              <h2 className="todo-subheading">
                To Do
                <span className="todo-percent">
                  {'' + (this.state.todo.length + this.state.done.length > 0 ? Math.round((this.state.todo.length / (this.state.todo.length + this.state.done.length) * 100) * 100) / 100 : 0) + '%'}
                </span>
              </h2>
              
              <ToDoItems id="todo-list-todo" items={this.state.todo} toggleDone={this.doItem} delete={this.deleteToDoItem}/>
            </div>
            <div className="todo-list-container">
              <h2 className="todo-subheading">
                Done
                <span className="done-percent">
                  {'' + (this.state.todo.length + this.state.done.length > 0 ? Math.round((this.state.done.length / (this.state.todo.length + this.state.done.length) * 100) * 100) / 100 : 0) + '%'}
                </span>
              </h2>
              
              <ToDoItems id="todo-list-done" items={this.state.done} toggleDone={this.undoItem} delete={this.deleteDoneItem}/>
            </div>
          </div>
        </div>
      );
    }
  }

  class ToDoItems extends Component {
  
    render() {
      return (
        <ul id={this.props.id} className="todo-list">
          {this.props.items.map(
            (item, key) => (
              <li className="todo-list-item" key={item.id}>
                <p className="todo-list-item-text">{item.text}</p>
                <div className="todo-list-actions">
                  <button className="todo-list-action-delete" onClick={this.props.delete.bind(item, key)}>
                    <i className="fas fa-trash fa-1x"></i>
                  </button>
  
                  <button className="todo-list-action-toggle" onClick={this.props.toggleDone.bind(item, key)}>
                    <i className="fas fa-check fa-1x"></i>
                  </button>
                </div>
              </li>
            )
          )}
        </ul>
      );
    }
  }

export default ToDoList;

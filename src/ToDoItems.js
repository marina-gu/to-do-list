import { Component } from 'react';

class ToDoItems extends Component {
    constructor(props){
      super(props);
    }
    
    render() {
      return (
        <ul id={this.props.id} className="todo-list">
          {this.props.items.map(
            (item, key) => (
              <li className="todo-list-item" key={item.id}>
                <p className="todo-list-item-text">{item.text}</p>
                <div className="todo-list-actions">
                  <button className="todo-list-action-delete" onClick={this.props.delete.bind(item, key)}>
                    <i class="fas fa-trash fa-1x"></i>
                  </button>
  
                  <button className="todo-list-action-toggle" onClick={this.props.toggleDone.bind(item, key)}>
                    <i class="fas fa-check fa-1x"></i>
                  </button>
                </div>
              </li>
            )
          )}
        </ul>
      );
    }
}
    export default ToDoItems;
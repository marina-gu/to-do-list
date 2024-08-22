import './App.css';
import image from './todo.jpg';
import ToDoList  from './ToDoList';

function App() {
  return (
    <div className='App'>
        <ToDoList/>
         <div className='container'>
          <img className='imgTodo' src={image} width='350px' alt='todo'/>
        </div>
    </div>
  );
}

export default App;


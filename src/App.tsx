import './assets/App.css';
import TodoOperations from './components/todoOperations';
import TodosBox from './components/todosBox';

function App() {
  return (
    <div className="App">
      <p className='todo-title'>Todo List</p>
      <div className="todo-container">
        <TodoOperations />
        <TodosBox />
      </div>
    </div>
  );
}

export default App;

import TodoList from "./components/TodoList";
import AddToDo from "./components/AddToDo";
import './App.css';
import './index.css';



const App = () => {
  
  return (
    <div>
      <h1>Task's List</h1>
      <AddToDo/>
      <TodoList/>
    </div>
  );
};

export default App;

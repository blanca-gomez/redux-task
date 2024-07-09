import { useSelector } from "react-redux";
import ToDoItem from "./DeleteToDo";

const  TodoList = () => {
    const todos = useSelector((state)=> state.todos);
    
    return(
        <>
            <ul>
                {todos.map((todo) => (
                    <ToDoItem key={todo.id} id={todo.id} title={todo.title} />
                ))}
            </ul>
        
        </>
    )
}

export default TodoList;
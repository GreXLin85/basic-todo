import Todo from "./todo";
import "../assets/todosBox.css"
import { useSelector } from "react-redux";
import { RootState } from "../store";
import TodoAdd from "./todoAdd";

export default function TodosBox() {
    const todos = useSelector((state: RootState) => state.todo.todos);
    const showMode = useSelector((state: RootState) => state.todo.showMode);

    return (
        <div className="todos-box">

            <TodoAdd />

            {todos.filter((value) => {
                if (showMode === "all") {
                    return true;
                }else if (showMode === "completed") {
                    return value.isCompleted;
                }else{
                    return !value.isCompleted;
                }
            }).map((todo, index) => (
                <Todo key={index} index={index} todoText={todo.text} isCompleted={todo.isCompleted} />
            ))}
        </div>
    )
}
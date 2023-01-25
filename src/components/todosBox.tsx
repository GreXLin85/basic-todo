import Todo from "./todo";
import "../assets/todosBox.css"
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { AiFillPlusCircle } from "react-icons/ai";
import TodoAdd from "./todoAdd";

export default function TodosBox() {
    const todos = useSelector((state: RootState) => state.todo.todos);

    return (
        <div className="todos-box">

            <TodoAdd />

            {todos.map((todo, index) => (
                <Todo key={index} index={index} todoText={todo.text} />
            ))}
        </div>
    )
}
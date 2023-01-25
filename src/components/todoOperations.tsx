import { useDispatch } from "react-redux";
import "../assets/todoOperations.css"
import { changeShowMode } from "../features/todo/todoSlice";

export default function TodoOperations() {
    const dispatch = useDispatch();

    return (
        <div className="todo-operations">
            <select className="todo-select" onChange={(e) => {
                dispatch(changeShowMode({
                    showMode: e.target.value as "all" | "completed" | "not-completed"
                }))
            }}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="not-completed">Not Completed</option>
            </select>
        </div>
    )
}
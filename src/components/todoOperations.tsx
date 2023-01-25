import "../assets/todoOperations.css"

export default function TodoOperations() {
    return (
        <div className="todo-operations">
            <button className="todo-add">
                Add Task
            </button>
            <select className="todo-select">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="not-completed">Not Completed</option>
            </select>
        </div>
    )
}
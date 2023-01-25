import "../assets/todo.css"

export default function Todo(
    {
        todoText,
    }: {
        todoText: string;
    }) {
    return (
        <div className="todo">
            <div className="todo-content">
                <input type="checkbox" className="todo-checkbox" />
                <p className="todo-text">{todoText}</p>
            </div>
            <div className="todo-buttons">
                <button className="todo-button">
                    Remove
                </button>
                <button className="todo-button">
                    Edit
                </button>
            </div>
        </div>
    )
}
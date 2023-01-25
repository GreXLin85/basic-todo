import "../assets/todo.css"
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';

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
                    <AiFillDelete />
                </button>
                <button className="todo-button">
                    <AiFillEdit />
                </button>
            </div>
        </div>
    )
}
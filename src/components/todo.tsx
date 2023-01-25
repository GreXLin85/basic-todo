import "../assets/todo.css"
import { AiFillEdit, AiFillDelete, AiFillCloseCircle } from 'react-icons/ai';
import { useDispatch } from "react-redux";
import { deleteTodo, edit } from "../features/todo/todoSlice";
import { useState } from "react";

export default function Todo(
    {
        todoText,
        index
    }: {
        todoText: string;
        index: number;
    }) {

    const [isEdit, setIsEdit] = useState(false);
    const [todo, setTodo] = useState(todoText);
    const dispatch = useDispatch();

    const deleteTodoHandler = () => {
        dispatch(deleteTodo({
            index,
        }));
    };

    const editTodoHandler = () => {
        if (isEdit) {
            dispatch(edit({
                index,
                text: todo
            }))

            setIsEdit(false);
        }else{
            setIsEdit(true);
        }
    };

    return (
        <div className="todo">
            <div className="todo-content">
                {isEdit ? <input type="text" className="todo-input" value={todo} onChange={(e) => {
                    setTodo(e.target.value);
                }}/> : (
                    <>
                        <input type="checkbox" className="todo-checkbox" />
                        <p className="todo-text">{todoText}</p>
                    </>
                )}

            </div>
            <div className="todo-buttons">
                <button className="todo-button" onClick={deleteTodoHandler}>
                    <AiFillDelete />
                </button>
                <button className="todo-button" onClick={() => {
                    editTodoHandler()
                }}>
                    {isEdit ? <AiFillCloseCircle /> : <AiFillEdit />}
                </button>
            </div>
        </div>
    )
}
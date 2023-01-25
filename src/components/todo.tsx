import "../assets/todo.css"
import { AiFillEdit, AiFillDelete, AiFillCloseCircle } from 'react-icons/ai';
import { useDispatch } from "react-redux";
import { deleteTodo, edit, toggleComplete } from "../features/todo/todoSlice";
import { useState } from "react";

export default function Todo(
    {
        todoText,
        index,
        isCompleted
    }: {
        todoText: string;
        index: number;
        isCompleted: boolean;
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

    const completeTodoHandler = (isChecked: boolean) => {
        dispatch(toggleComplete({
            index,
            isChecked
        }));
    };

    return (
        <div className="todo">
            <div className="todo-content">
                {isEdit ? <input type="text" className="todo-input" value={todo} onChange={(e) => {
                    setTodo(e.target.value);
                }}/> : (
                    <>
                        <input type="checkbox" className="todo-checkbox" checked={isCompleted} onChange={(e) => {
                            completeTodoHandler(e.target.checked);
                        }}/>
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
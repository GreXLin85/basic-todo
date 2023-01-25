import { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { add } from "../features/todo/todoSlice";

export default function TodoAdd() {
    const [text, setText] = useState('');
    // initial the dispatch here
    const dispatch = useDispatch();

    const addTodoHandler = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        
        if (text.length < 3) {
            return;
        }

        dispatch(add({
            text: text,
            isCompleted: false,
        }));
        setText('');
      };

    return (
        <div className="todo">
            <div className="todo-content">
                <input type="text" className="todo-input" value={text} onChange={(e) => {
                    setText(e.target.value);
                }} />
            </div>
            <div className="todo-buttons">
                <button className="todo-button" onClick={addTodoHandler}>
                    <AiFillPlusCircle />
                </button>
            </div>
        </div>
    )
}
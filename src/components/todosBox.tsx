import Todo from "./todo";
import "../assets/todosBox.css"

export default function TodosBox(){
    return (
        <div className="todos-box">
            <Todo todoText="Bu tamamen bir deneme metnidir" />
        </div>
    )
}
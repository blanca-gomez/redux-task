import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/todoSlice";
import { RiDeleteBinLine } from "react-icons/ri";

const ToDoItem = ({id, title}) => {
    const dispatch = useDispatch();

    const handleDeleteClick = () => {
        dispatch(deleteTodo({id}))
    }

    return(
        <>
            <li className="card">
                <div className="read-the-docs">
                    Id: {id}, Title: {title}
                </div>
                <button onClick={handleDeleteClick}><RiDeleteBinLine /></button>
            </li>
        </>   
    )
}

export default ToDoItem;
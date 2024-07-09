import React, {useState} from "react";
import { addTodo } from "../redux/todoSlice";
import { useDispatch } from "react-redux";
import { RiAddFill } from "react-icons/ri"; 

const AddToDo = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    const onSubmit = (event) => {
        event.preventDefault()
        if(value){
            dispatch(addTodo({title:value}))
        }
    }

    return(
        <div className="form-container">
             <form onSubmit={onSubmit}>
                <input 
                    type="text" 
                    value={value}
                    onChange={(event) => setValue(event.target.value)}>
                </input>
                <button type="sumbit"><RiAddFill/></button>
            </form>




        </div>
       
    )
}

export default AddToDo;
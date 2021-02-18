import { useState } from "react";

const AddTodo = (props) =>{
    const [input, setInput] = useState('')
    
    const handleAddTodo=(e)=>{
        e.preventDefault()
        props.addTodo(input)
        setInput('')
    }

    return(
        <form onSubmit={handleAddTodo}>
            <input
            value={input}
            onChange={(e)=>{setInput(e.target.value)}}
            placeholder={`Add a todo!`}/>
            <button>Submit</button>
        </form>
    )
}

export default AddTodo
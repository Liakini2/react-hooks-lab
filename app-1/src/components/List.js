
import React from 'react'
import Todo from './Todo'

const List = (props) =>{
    return(
        <div>
            {props.list.map((todo, index)=>{
                return <Todo todo={todo} index={index}/>
            }
            )}
        </div>
    )
}

export default List
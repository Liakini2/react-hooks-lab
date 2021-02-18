import './App.css';
import React, {useState} from 'react'
import List from './components/List';
import AddTodo from './components/AddTodo';

const App=()=>{
  const [todos, setTodos] = useState([])

  const addTodo=(input)=>{
    setTodos([...todos, input]) 
  }
  
  return (
    <div className="App">
      <AddTodo addTodo={addTodo}/>
      <List list={todos}/>
    </div>
  );
}

export default App;

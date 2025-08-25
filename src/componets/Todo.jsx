import React, { useState } from 'react'



function Todo() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");
    console.log(input);

    const addTodo = () => {
        if(input.trim() === "") return;
        setTodos([...todos, input]);
        setInput("");
    };
    const removeTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

  return (
    <div>
      <h1>Todo</h1>

      <input type="text" value={input} placeholder="work" onChange={(e)=> setInput(e.target.value)}/>
      <button onClick={addTodo}>add</button>
      <ul>
        {todos.map((todo, i) => (
            <li key={i}>
                {todo}
                <button onClick={()=> removeTodo(i)}>remove</button>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo

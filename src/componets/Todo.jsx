import React, { useState } from 'react'



function Todo() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");
    console.log(input);

    const addTodo = () => {
        if(input.trim() === "") return;
        setTodos([...todos, { text: input, completed: false }]);
        setInput("");
    };


    const removeTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    const toggleComplete = (index) => {
        const newTask = [...todos];
        newTask[index].completed = !newTask[index].completed;
        setTodos(newTask);
    };

  return (
    <div>
      <h1>Todo</h1>

      <input type="text" value={input} placeholder="work" onChange={(e)=> setInput(e.target.value)}/>
      <button onClick={addTodo}>add</button>
      <ul>
        {todos.map((todo, i) => (
            <li key={i}>
                <span onClick={()=> toggleComplete(i)}>{todo.text}</span>
                <button onClick={()=> removeTodo(i)}>remove</button>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo

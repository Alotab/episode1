import React from 'react'
import { useState } from 'react'

const Todo = () => {

    const [todolist, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleChange = (event) => {
        setTodoList(event.target.value);
    };

    const addTask = ()=>{
        const newTodoList = [...todolist, newTask]
        setTodoList(newTodoList);
    };



  return (
    <div className='addTask'>

    </div>
  )
}

export default Todo
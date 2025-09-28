import React, { useState } from 'react'
import Navbar from './components/Navbar'

import { v4 as uuidv4 } from 'uuid';

uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([
    { id: 1, todo: "Sample Todo" }
  ]);
  const handleDelete = (id) => {
    setTodos(todos.filter(item => item.id !== id));
  }
  const handleEdit = () => {
    // Implement edit logic here
  }
  const handleAdd = () => {
    setTodos([...todos,  {id: uuidv4(), todo, isCompleted: false}])
    setTodo("")
  }
  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    console.log(e, e.target)
    let id = e.target.name;
    console.log(`The id is ${id}`);
    let index = todos.findIndex(item=>{
      return item.id == id;
    })
    let newTodos = [...todos];
    nerwTodos[index].isCompleted = !nerwTodos[index].isCompleted;
    setTodos(newTodos);
    setTodos(nerwTodos, todos);
  }
  
  return (
    <>
      <Navbar />
      <div className='container mx-auto'>
        <h1 className='font-bold text-center text-3xl '>Planit - Manage your todos at one place</h1>
        <div className='bg-teal-100 p-2 m-6 rounded-xl mx-auto '>
          <div className="addTodo my-5 flex flex-col gap-4 text-center">
            <h2 className='text-xl font-bold underline'>Add a Todo</h2>
            <div className='flex text-center gap-3 justify-center'>

              <input onChange={handleChange} value={todo} className='border-black bg-white rounded-xl w-3/5 text-center border-none font-bold' type="text" />
              <button onClick={handleAdd} className='bg-teal-700 cursor-pointer hover:bg-teal-900 text-white p-5 py-1 rounded-xl '>Add</button>
            </div>
          </div>
          <div className = 'flex items-center justify-center flex-col'>
          <h3 className='text-xl font-bold my-5 '>Your Todos</h3>
          <div className="todos">
            {todos.map(item => (

               <div key={item.id} className="todo flex my-3 justify-between items-center gap-6 ">
                <input name={item.id} onChange ={handleCheckbox} type="checkbox" value={item.isCompleted} id ="" />
                <div className= {item.isCompleted?"line=through": ""}>{item.todo}</div>
                <div className="buttons flex flex-row gap-1">
                  <button onClick={() => handleEdit(item.id)} className='bg-teal-700 cursor-pointer hover:bg-teal-900 text-white p-2 py-1 rounded-xl mx-2 '><span className="material-symbols-outlined">
edit
</span></button>
                  <button onClick={() => handleDelete(item.id)} className='bg-teal-700 cursor-pointer hover:bg-teal-900 text-white p-2 py-1 rounded-xl mx-2 '><span className="material-symbols-outlined">
delete
</span></button>
                </div>
              </div>
            ))}
          </div>
        </div>
            </div>
      </div>
    </>
  )
}

export default App

import React, { useState } from 'react'
import Navbar from './components/Navbar'
function App() {
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
    // Implement add logic here
  }
  return (
    <>
      <Navbar />
      <div className='container mx-auto'>
        <h1 className='font-bold text-center text-3xl '>Planit - Manage your todos at one place</h1>
        <div className='bg-violet-100 p-2 m-6 rounded-xl mx-auto '>
          <div className="addTodo my-5 flex flex-col gap-4 text-center">
            <h2 className='text-xl font-bold '>Add a Todo</h2>
            <div className='flex text-center gap-3 justify-center'>

              <input className='border-black bg-white rounded-xl w-3/5 text-center border-none font-bold' type="text" />
              <button onClick={handleAdd} className='bg-violet-700 cursor-pointer hover:bg-violet-900 text-white p-2 py-1 rounded-xl '>Add</button>
            </div>
          </div>
          <h2 className='text-xl font-bold my-5'>Your Todos</h2>
          <div className="todos">
            {todos.map(item => (
              <div className="todo flex " key={item.id}>
                <div className="text font-bold">{item.todo}</div>
                <div className="buttons">
                  <button onClick={() => handleEdit(item.id)} className='bg-violet-700 cursor-pointer hover:bg-violet-900 text-white p-2 py-1 rounded-xl mx-2'><span className="material-symbols-outlined">
edit
</span></button>
                  <button onClick={() => handleDelete(item.id)} className='bg-violet-700 cursor-pointer hover:bg-violet-900 text-white p-2 py-1 rounded-xl mx-2'><span className="material-symbols-outlined">
delete
</span></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App

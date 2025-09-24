import React from 'react'

const navbar = () => {
  return (
    <nav className = 'flex justify-between bg-purple-900 text-white p-4'>
      <div className="logo">
        <span className ='font-bold text-xl mx-8'>Planit</span>
      </div>
<ul className = 'flex gap-6 mx-8'>
  <li className ='cursor-pointer hover:font-bold transition-all '>Home</li>
  <li className ='cursor-pointer hover:font-bold transition-all '>Your Task</li>
</ul>
    </nav>
    
  )
}

export default navbar

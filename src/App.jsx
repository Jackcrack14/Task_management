import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTask] = useState([])

  const addData = () =>{
    setTask()
  }

  return (
    <div className='app-cont'>
      <div className='form-cont'>
      <form onSubmit={addData}>
      <input type='text' placeholder='Title'></input>
      <input type='text' placeholder='Description'></input>
      <select name="cars" id="cars">     
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
      <button>Add</button>
      </form>
      </div>
    </div>
  )
}

export default App

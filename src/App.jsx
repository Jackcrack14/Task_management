import { useState } from 'react'
import './App.css'

function App() {
  const [title,setTitle] = useState("")
  const [desc,setDesc] = useState("")
  const [status,setStatus] = useState("")
  const [tasks, setTask] = useState([])

  const addData = (e) =>{
    e.preventDefault()
    const curData = {
      title:title,
      description:desc,
      status:status
    }
    setTask([...tasks,curData])
    setTitle(" ")
    setDesc(" ")
    
  }
{console.log(tasks)}
  return (
    <div className='app-cont'>
      <div className='form-cont'>
      <form onSubmit={addData}>
      <input type='text' placeholder='Title' onChange={(e) => setTitle(e.target.value)}></input>
      <input type='text' placeholder='Description' onChange={(e) => setDesc(e.target.value)}></input>
      <select name="options" id="options" value={status} onClick={(e) =>setStatus(e.target.value)}>     
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
      <button>Add</button>
      </form>
      </div>
      <div className='tasks-cont'>
        {tasks.map(ele =>{
          return(
            <>
            <h2>{ele.title}</h2>
            <p>{ele.description}</p>
            <p>{ele.status}</p>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default App

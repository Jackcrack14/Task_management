import { useState } from 'react'
import './App.css'

function App() {
  const [title,setTitle] = useState("")
  const [desc,setDesc] = useState("")
  const [status,setStatus] = useState("")
  const [tasks, setTask] = useState([])

  const [editId,setEditId] = useState(0)
  const [filterStatus,setFilterStatus] = useState("All")

  const addData = (e) =>{
    e.preventDefault()
    if(!title || !desc){
      alert("fill Data")
    }
    if(editId){
      const editItem = tasks.find((ele) => ele.id ===editId)
      const updatedTask = tasks.map((ele) => ele.id === editItem.id ? (ele = {id:ele.id,title:title,description:desc,status:status}):(ele = {id:ele.id,title:ele.title,description:ele.description,status:ele.status}))
      setTask(updatedTask)
      setTitle("")
      setDesc("")
      setEditId(0)
      return;
    }
    if(title && desc){
      const curData = {
        id:new Date().getTime().toString(),
        title:title,
        description:desc,
        status:status
      }
      setTask([...tasks,curData])

      setTitle("")
      setDesc("")
    }
    
    
  }
 

    const filteredTasks = tasks.filter((ele) => {
      if (filterStatus === "ToDo") return ele.status === filterStatus;
      if (filterStatus === "All") return tasks;
      if (filterStatus === "Progressing") return ele.status === filterStatus;
      if (filterStatus === "Done") return ele.status === filterStatus;
    })
      
    

    
    
    


  const deleteData = (idx) =>{
    const updatedItems = tasks.filter((ele) => {
      return idx !== ele.id
    } )
    setTask(updatedItems)
  }
  const editData = (idx) =>{
    const editItem = tasks.find((ele) =>{
      return idx === ele.id
    })
    setTitle(editItem.title)
    setDesc(editItem.description)
    setStatus(editItem.status)
    setEditId(idx)
    
  }
{console.log(tasks)}
  return (
    <div className='app-cont'>
      <h1>Tasker</h1>
      <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value) }>
        <option value="All">All</option>
      <option value="ToDo">ToDo</option>
        <option value="Progressing">Progressing</option>
        <option value="Done">Done</option>
      </select>
      <div className='form-cont'>
      <form >
        <div className='form-row'>
        <div className="input-data">
        <input type='text' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)}></input>
               <div class="underline"></div>
               <label for="">Title</label>
            </div>
      
      </div>
      <div className='form-row'>
      <div className="input-data">
      <input type='text' placeholder='Description' value={desc} onChange={(e) => setDesc(e.target.value)}></input>
               
               <div class="underline"></div>
               <label for="">Description</label>
            </div>
      </div>
      <div className='form-row'>
      <select name="options" id="options" value={status} onChange={(e) =>setStatus(e.target.value)}>     
        <option value="ToDo">ToDo</option>
        <option value="Progressing">Progressing</option>
        <option value="Done">Done</option>
      </select>
      </div>
      <div className='form-row'>
      <button onClick={addData}>{editId ? "Update" : "Add"}</button>
      </div>
      </form>
      </div>
      {/* <div className='tasks-cont'> */}
        {filteredTasks.map(ele =>{
          return(
            <div className='tasks-cont' key={ele.id}>
              <h2>{ele.title}</h2>
              <p>{ele.description}</p>
              <p>{ele.status}</p>
              <button onClick={() => deleteData(ele.id)}>Delete</button>
              <button onClick={() => editData(ele.id)}>Edit</button>
            </div>
          )
        })}
      {/* </div> */}
    </div>
  )
}

export default App

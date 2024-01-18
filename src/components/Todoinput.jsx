import React from 'react'
import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';


function Todoinput({isCompleted,setIsCompleted}) {
  
  const[index,setIndex]=useState(undefined)
  const [taskData, setTaskData] = useState([]);
  const [taskName,setTaskName]=useState("")
  const [taskDescription,setTaskDescription]=useState("")
  //addTodoTask
  let addTask = ()=>{
   
    let newTodolist={
      title:taskName,
      description:taskDescription
    }
    if(taskName=='' || taskDescription==''){
      alert("Enter Task & Description")

   }else{
    let updatedtaskData = [...taskData]
    if(index != undefined){
     updatedtaskData[index] = newTodolist
    }
    else{
    updatedtaskData.push(newTodolist)
    }
    setTaskData(updatedtaskData)
      console.log(taskData)
      localStorage.setItem('taskData', JSON.stringify(taskData));
    setTaskName('')
    setTaskDescription('')
    setIndex(undefined)
  }
   }
    
  //deleteTodo
  let handleDelete = (i)=>{
   let deleteTodo=[...taskData]
   deleteTodo.splice(i,1)
   setTaskData(deleteTodo)
  }
//EditTodo
  let handleEdit =(i)=>{
  [...taskData].map((item,index)=>{
      if(index === i){
        setTaskName(item.title)
         setTaskDescription(item.description)
         setIndex(index)
         return
      }
    });
  }
  //FilterStatus
  let handleFilter = (filterType)=>{
    setIsCompleted(filterType)
  }

  let filteredTodos= isCompleted ? taskData.filter((todo) => todo.completed)  : taskData.filter((todo) => !todo.completed);
  return <>
       <div className='wrapper'>
          <div className="Input">
              <div className='Task-input'>
                <input type="text" placeholder='Task Name'  value={taskName} onChange={(e)=>setTaskName(e.target.value)} /> &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" placeholder='Task Description'  value={taskDescription} onChange={(e)=>setTaskDescription(e.target.value)}/> &nbsp;&nbsp;&nbsp;&nbsp;
                <button className='primaryBtn' onClick={()=>addTask()}>Add Task</button>
              </div> 
              <div className="statusfilter">
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Status Filter
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item >All</Dropdown.Item>
                      <Dropdown.Item onClick={()=>{handleFilter(true)}}>Completed</Dropdown.Item>
                      <Dropdown.Item onClick={()=>{handleFilter(false)}}>NotCompleted</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
              </div>
               
                   {
                    taskData.map((e,i)=>{
                      return (
                        <div className="card" key={i}>   
                          <div className="card-body">
                            <p className="card-header">Name:{e.title}</p>
                            <p className="card-title">Description:{e.description}</p>
                            <br />
                              <div>
                                  <Dropdown>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                          Status
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                          <Dropdown.Item >Completed</Dropdown.Item>
                                          <Dropdown.Item  >not completed</Dropdown.Item>
                                        </Dropdown.Menu>
                                  </Dropdown>
                              </div><br />
                              <div className="btn-element">
                                    <button  className="btn btn-primary" onClick={()=>handleEdit(i)}>Edit</button>
                                    &nbsp;
                                    <button  className="btn btn-danger" onClick={()=>handleDelete(i)}>Delete</button>
                              </div>
                          </div>
                        </div>)
                    })
                   }
      
         </div>
       </div>
       
       
        
       
       
     
  </>
}

export default Todoinput
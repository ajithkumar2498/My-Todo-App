import React,{useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

function Tasklist({taskData,setTaskData,name,task}) {



 
  return <>
  <div className="card">   
      <div className="card-body">
        <h6 className="card-header">Name:</h6>
        <h6 className="card-title">Description:</h6>
        <br />
          <div >
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
                <button  className="btn btn-primary" >Edit</button>
                &nbsp;
                <button  className="btn btn-danger">Delete</button>
          </div>
      </div>
</div>

  </>
  
}

export default Tasklist
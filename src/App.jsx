import { useState } from "react"
import Todoinput from "./components/Todoinput"


function App() {
 const [isCompleted,setIsCompleted]=useState(true)
  
  return (
    <>
    <h1> My Todo </h1>
     <Todoinput isCompleted={isCompleted} setIsCompleted={setIsCompleted}/>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import State from './State'
import Users from './users'

function App() {
  // const [count, setCount] = useState(0)

  function handleClick(){
    alert('button clicked')
  }
  const button2=()=>{
    alert('button 2 clicked');
  }

  return (
    <>
      
      <h1> React core concepts part 2 </h1>
      <Users></Users>
      

      <State></State>
      

      {/* Jsx version */}
      <button onClick={handleClick}>Click Me</button> 
      <button onClick={button2}>Button 2</button>
      
     
    </>
  )
}

export default App

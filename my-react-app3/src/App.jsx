import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <Todo></Todo>

      {/* <Student name='hossain' id='23330' age='22'></Student>
      <Student name='Ahmmed' id='23330' age='22'></Student>
      <Student name='Taufiq' id='23330' age='22'></Student>
       */}
    </>
  )
}

function Student({name,id,age}) {
  // const student = {name:"Hossain Ahmmed Taufiq", age : 21, id: 2232104}
  console.log(name,id ,age);
  return (
    <h2 className='student'>Name: {name}   
    Age: {age}
    id:{id}

    </h2>
  )
}


export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more about react and vite 
      </p>
      <NewFunction></NewFunction>
      <AddingArray></AddingArray>
      <Student></Student>
    </>
  )
}

function NewFunction(){
  const age =25;
  const person ={
    name: 'hossain ', id : 222334, address: 'Dhaka '
  }

  return (
    <h4> Name of the person is: {person.name}, age : {age}  address of the person : {person.address}, id of his : {person.id}  , Module-38-4</h4>
    // <h1></h1>
  )
}

function AddingArray (){
  const name= " Website created by Hossain Ahmmed Taufiq ";

  return name;
}

function Student (){
  const student={
    name :"" ,
    age : ,
    id:
  }
}

export default App

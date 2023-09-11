import { useState } from "react"

export default function State (){
    const [count, setCount]=useState(0);

    const handelAdd=()=>{
        const newCount=count+1 ;
        setCount(newCount);
    }

    const reduceCount=()=>{
        const newCount = count-1;
        setCount(newCount);
    }


    return (
    <div style={{border: '2px  yellow solid',paddingBottom:'8px ',margin: '5px',borderRadius:'8px'}}>
    <h3>Counter: {count}</h3>
    <button onClick={handelAdd}>Count</button>
    <button onClick={reduceCount}>Reduce</button>
    </div>
    )
}
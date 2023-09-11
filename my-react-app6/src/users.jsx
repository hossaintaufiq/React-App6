import { useEffect, useState } from "react"

export default function Users(){
    const [users,setUsers]=useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=> setUsers(data))
    },[])



    return (
        <div style={{border: '2px  red solid',paddingBottom:'8px ',margin: '5px',borderRadius:'8px'}}>
            <h3>Users: {users.length}</h3>
            <h1>User name : {users[0].name}</h1>
        </div>
        
    )
}
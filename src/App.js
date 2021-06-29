import './App.css';
import Card from './Card';
import React, {useEffect}from 'react';
import { useState } from 'react';


function App() {
  
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);

  // boolean variable to display next and back...

  var arrow;
  if(page===1){
    arrow = false;
  }
  else{
    arrow = true;
  }
  
  const getUsers = async()=>{
    const response =  await fetch(`https://reqres.in/api/users?page=${page}`);
   
    const result = await response.json();
    const data = result.data;
    setUsers(data);
   
  }

  useEffect(() => {
    getUsers();
    
  },[arrow,users]);
  
  return (
    <div>
      <h2>List of users</h2>
      <br/>
      {
        arrow===true?<i className="fas fa-angle-double-left leftarrow" onClick = {()=>setPage(1)}></i>: <i className="fas fa-angle-double-right rightarrow" onClick = {()=>setPage(2)}></i>
        
      
      }
      
     
    
     
     
      <section className="container">
     
      {
        users.map((user,index)=>{
          
          return <Card user = {user} key = {user.id}/>
        })
      }
       
      </section>
     
      </div>     
   
  );
}

export default App;

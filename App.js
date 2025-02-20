import { useEffect, useState } from 'react';
import './App.css';
import { Button,EditableText,InputGroup,Toaster } from '@blueprintjs/core';

const Apptoaster=Toaster.create({
  position:"top"
})

function App() {

             const[users,setusers]=useState([]);
             const[name,setname]=useState("")
             const[email,setemail]=useState("")
             const[website,setwebsite]=useState("")

             useEffect(()=>{
                  fetch('https://jsonplaceholder.typicode.com/users') 
                  .then((response)=>response.json())
                  .then((json)=>setusers(json))
             },[])

             function adduser(){
              const trmname=name.trim();
              const trmemail=email.trim();
              const trmwebsite=website.trim();

              if(name&&email&&website){
                fetch('https://jsonplaceholder.typicode.com/users' ,{
                   method : "POST",
                   body: JSON.stringify(
                    {
                      name:trmname,
                      email:trmemail,
                      website:trmwebsite
                    }
                   ),
                   headers:{
                    "content-type":"application/json; charset=UTF-8"
                   }
                }).then((response)=>response.json())
                   .then((data)=>{
                    setusers([...users,data]);
                    Apptoaster.show({
                      message:"User added successfully",
                      intent:'success',
                      timeout: 3000
                    })
                     setname("")
                     setemail("")
                     setwebsite("") 
                   })
              }

             }
           function onchangehandler(id,key,value){0
                 setusers((users)=>{
                    return users.map(user=>{
                       return  user.id === id?{...user,[key]:value } : user;
                     })
                })
           }
           function updateUser(id){
            const user= users.find((user)=>user.id === id);
                
            fetch(`https://jsonplaceholder.typicode.com/users/11` ,
              {
              method : "PUT",
              body: JSON.stringify(user),
              
              headers:{
               "content-type":"application/json; charset=UTF-8"
              }
           }
             ).then((response)=>response.json())
              .then((data)=>{
               Apptoaster.show({
                 message:"User updated successfully",
                 intent:'success',
                 timeout: 3000
               })
              })
         

           }
           function deleteUser(id){
            fetch(`https://jsonplaceholder.typicode.com/users/${id}` ,
              {
              method : "DELETE",              

           }
             ).then((response)=>response.json())
              .then((data)=>{
                setusers((users)=>{
                  return users.filter((user)=>user.id!==id)
                })
               Apptoaster.show({
                 message:"User Deleted successfully",
                 intent:'success',
                 timeout: 3000
               })
              })
         

           }

  return (
    <div className="App">
       <table className='bp4-html-table modifier'>
         <thead>
             <th>ID</th>
             <th>Name</th>
             <th>Email</th>
             <th>Website</th>
             <th>Actions</th>
         </thead>
         <tbody>
          {users.map(user=>
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{<EditableText onChange={value=> onchangehandler(user.id,'email',value)} value={user.email}/>}</td>
            <td>{<EditableText onChange={value=> onchangehandler(user.id,'website',value)} value={user.website}/>}</td>
            <td><Button intent='primary' onClick={()=> updateUser(user.id)}>Update</Button> 
            &nbsp;
                 <Button intent='danger' onClick={()=> deleteUser(user.id)}>Delete</Button>
            </td>

          </tr>
          )}
         </tbody>
         <tfoot>
          <tr>
            <td></td>
            <td><InputGroup
               value={name}
               onChange={(e)=>setname(e.target.value)}
               placeholder='Enter name'
            /></td>
             <td><InputGroup
               value={email}
               onChange={(e)=>setemail(e.target.value)}
               placeholder='Enter email'
            /></td>
             <td><InputGroup
               value={website}
               onChange={(e)=>setwebsite(e.target.value)}
               placeholder='Enter Website'
            /></td>
            <td><Button intent='Success' onClick={adduser}>Add User</Button></td>
          </tr>
         </tfoot>
       </table>

    </div>

  );
  
}

export default App; 
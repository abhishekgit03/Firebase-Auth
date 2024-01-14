import React, { useState } from 'react'
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"
import {app} from "../firebase"

const auth=getAuth(app)

function Signup() {
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const createUser=()=>{
      createUserWithEmailAndPassword(auth,email,password)
      .then((value)=>alert("Success"))
    };
  return (
    <div className='signup-page'>
        <label>Email</label>
        <input 
        onChange={e => setEmail(e.target.value)} 
        type="email"
        required placeholder="Email"/>
        <label>Password</label>
        <input 
         onChange={e => setPassword(e.target.value)} 
         type="password"
        required placeholder="Password"/>
        <button onClick={createUser}>Signup</button>
    </div>
  )
}

export default Signup
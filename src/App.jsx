import { useState } from 'react'
import { app } from './firebase'
// import {getDatabase, ref, set} from "firebase/database"
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth"
import Signup from './pages/Signup'
import './App.css'

const auth =getAuth(app)
function App() {
   
  // const signupUser =()=>{
  //   createUserWithEmailAndPassword(auth,
  //     'abhishek@gmail.com',
  //     "abhishek@1224")
  //     .then((value)=>console.log(value))
  // }
  // const putData=()=>
  // {
  //   set(ref(db,"users/abhishek"),
  //   {
  //     id:1,
  //     name: "Abhishek",
  //     age:20    
  //   })
  // }

  return (
    <>
      <div>Hello World!</div>
      <Signup/>
    </>
  )
}

export default App

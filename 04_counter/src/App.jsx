import { useState } from 'react'//here in {} we can write multiple hooks separated by commma 
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  let[count, setcounter]=useState(15);// ISKO DECLARE HMESA LET SE KRENGE 
  // counter variable jha jha bhi dikhega , wha pe usko update krdega yah pe " useState" ek hook hai 

  // let count=44; comment krdia bcz isi naam k argument abhi lenge
const func=()=>{
  console.log("hi! ", Math.random());
  count+=1;
setcounter(count);
//yha pe func ko call kia 
}
const remove=()=>{
  setcounter(count-=1);
}
  return (
    <>
    <h1>hello world!</h1>
    <h1>hello universe the new leader is being made {count}!</h1>
    {/*  yha pe count update nhi hoga "PROBLEM UI UPDATION"!*/}
    <button onClick={func}> increase
      </button>
<br/>
<button onClick={remove}>dec</button>
    </> 
  )
}

export default App
// yha hmne hook k baare m sikha ki basically button(any element) k click  krne pe kaise changes aate hai (value update kaise hoti hai )
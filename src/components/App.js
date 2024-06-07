
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [sumtotal,setSumTotal]=useState(0);
  const [number,setNumber]=useState([]);
  function handleChange(){
    
  }
  useEffect(()=>{
    setSumTotal((number.reduce((a,b)=>a+b,0)))

  },[number])
function handleChange(value){
setNumber(prevNumber=>[...prevNumber,parseInt(value,10)])
  
}
  return (
    <div>
        {/* Do not remove the main div */}
        <input onChange={(e)=>handleChange(e.target.value)} type="number"></input>
        <p>Sum: {sumtotal}</p>
    </div>
  )
}

export default App

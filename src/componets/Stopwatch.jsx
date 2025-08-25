import React, { useEffect, useState } from 'react'

function Stopwatch() {

    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(()=>{
        if(running){
            const interval = setInterval(()=>{
                setTime(prev=> prev+1);
            },10);
            return ()=> clearInterval(interval);
        } 
        
    },[running]);
  return (
    <div>
      <h1>Time: {time} </h1>
      <button onClick={()=> setRunning(prev=> !prev)}>
        {running ? "Pause" : "Start"}
      </button>
        <button onClick={()=> setTime(0)}>Reset</button>
    </div>
  )
}

export default Stopwatch

import React, { useEffect, useState } from 'react'

function Stopwatch() {

    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(()=>{
        if(running){
            const interval = setInterval(()=>{
                setTime(prev=> prev+1);
            },1000);
            return ()=> clearInterval(interval);
        } 
        
    },[running]);

    const formatTime = (seconds) =>{
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}`;
    };
  return (
    <div>
      <h1>Time: {formatTime(time)} </h1>
      <button onClick={()=> setRunning(prev=> !prev)}>
        {running ? "Pause" : "Start"}
      </button>
        <button onClick={()=> setTime(0)}>Reset</button>
    </div>
  )
}

export default Stopwatch

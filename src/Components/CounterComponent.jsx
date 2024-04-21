import React, { useEffect } from 'react'
import { useState } from 'react'

const CounterComponent = () => {
    const[count,setCount] = useState(() => {
		const storedCount = JSON.parse(localStorage.getItem('count'));
		return storedCount !== null ? storedCount : 0;
	});

    useEffect(()=>{
		localStorage.setItem("count", JSON.stringify(count));
	},[count])

const backgroundLevel = {
    height: `${count * 10}px`, 
    backgroundColor: 'blue',
    transition: 'height 2s cubic-bezier(0.68, -0.55, 0.27, 1.55)', 
  };
    

  return (
    <div className='counter-container' style={backgroundLevel}>
      <div className='counter' style={{backgroundColor: "green"}}>
      <h1>Counter</h1>
        <p>{count}</p>
        <p>Counter value</p>
        <div className='btn'>
            <button onClick={()=>setCount(count + 1)}>+</button>
            <button onClick={()=>setCount(0)}>Reset</button>
            <button onClick={()=>setCount(count - 1)}>-</button>
        </div>
      </div>
    </div>
  )
}

export default CounterComponent

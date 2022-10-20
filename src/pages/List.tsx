import React, { useState, useEffect } from 'react';
import dayjs from "dayjs";

function App() {

    const [timer, setTimer] = useState(0);

    useEffect(() => {

      setInterval(() => {    
        setTimer(timer => timer + 5);
        
      }, 1000)

    },[] )

  return (
    <div className="App">
      

        <h1>{timer}  allez..: {dayjs().format("H[h] m[m] s[s]")} </h1>

    </div>
  );
  
}

export default App;
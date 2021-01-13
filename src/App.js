import React, { useState } from 'react';

const App = () => {

  let time = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState(time);

  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  }

  return ( 
    <div style={{ textAlign: "center" }}>
      <h1>
        {time}
      </h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
   );
}
 
export default App;
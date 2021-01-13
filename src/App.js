import React, { useState } from 'react';

const App = () => {

  let time = new Date().toLocaleTimeString();

  let [ctime, setCtime] = useState(time);

  const updateTime = () => {
    ctime = new Date().toLocaleTimeString();
    setCtime(ctime);
  }

  setInterval(updateTime, 1000);

  return ( 
    <div style={{ textAlign: "center" }}>
      <h1>
        {time}
      </h1>
    </div>
   );
}
 
export default App;

//  Develped by - Shwetang
//  GitHub - https://github.com/Shwetang550

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
    <div className="container">
      <h1>
        {ctime}
      </h1>
    </div>
   );
}
 
export default App;
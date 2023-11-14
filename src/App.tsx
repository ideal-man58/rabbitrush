import React, { useState } from 'react';
import './App.css';

function App() {
  let [level, setLevel] = useState(1);
  let [score, setScore] = useState(1);
  
  return (
    < >
      <div className='game-title'>
        래빗러쉬
      </div>
      <div className='record'>
        <h3> 레벨: { level }  &#40;최고기록: { score }&#41;</h3>
        <hr/>
      </div>
    </>
  );
}

export default App;

import React from 'react';
import './App.css';
import {useInput} from "./hooks/useInput";

function App() {

  const username = useInput('')
  const password = useInput('')

  return (
    <div className="App">

      <input {...username} type="text" placeholder={'username'}/>
      <input {...password} type="password" placeholder={'password'}/>
      <button onClick={() => console.log(username.value, password.value)}>send</button>

    </div>
  );
}

export default App;

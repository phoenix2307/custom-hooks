import React from 'react';
import './App.css';
import {Hover} from "./components/Hover";

function App() {
    /*  // реалізація хука useInput
      const username = useInput('')
      const password = useInput('')*/


    return (
        <div className="App">
            {/*реалізація хука useInput*/}
            {/*<input {...username} type="text" placeholder={'username'}/>
      <input {...password} type="password" placeholder={'password'}/>
      <button onClick={() => console.log(username.value, password.value)}>send</button>*/}

            <Hover/>
        </div>
    );
}

export default App;

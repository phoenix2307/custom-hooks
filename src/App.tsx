import React from 'react';
import './App.css';
import {Hover} from "./components/Hover";
import {CustomInput} from "./components/CustomInput";

function App() {

    return (
        <div className="App">
            <CustomInput/>
            <Hover/>
        </div>
    );
}

export default App;

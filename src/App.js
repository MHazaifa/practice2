

import './App.css';
import Home from './Home';
import {useState} from 'react'


function App() {
const[myName ,updateMyName]= useState('Waqas');
 const name = "hazaifa"
 const location = "lahore"




  return (
    <div>
      <h1>{myName}</h1>
      <button onClick={()=>updateMyName("zain")}>Update</button>
     <Home Send={name} myName={myName}/>
    </div>
  );
}

export default App;

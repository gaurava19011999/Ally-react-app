// import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import About from './component/About';
import Form from './component/Form';
import  {useState} from 'react';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {

  const [mode, setMode]=useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#454141b3'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
    }
  }

  return (
    <>
   <Router>
    <Navbar title="Ally" mode={mode} toggleMode={toggleMode}/>
    {/* <div className="container mw-100" >
      <Form mode={mode}/>
    </div>
    <About/> */}


      
        <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}/>
            
          <Route exact path="/" element={<Form mode={mode}/>}/>
              
        </Routes>
    </Router>
   </>
  );
}

export default App;

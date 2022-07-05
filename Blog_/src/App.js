import React, {Component, useState} from 'react';
// import logo from './logo.svg';
// import Side  from './components/newSide';
import Nav from './components/navbar';
import Hompage from './components/U_homePage';
import Tag from './components/tagging';
import './App.css';
import './circle.css';
import { BrowserRouter,Routes,Route,Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";



class App extends Component  {
 
  render(){
  return (
    
    // <div className="App">
     
    <Routes>
      <Route exact path='/' element=
      { 
        <div className="App"> 
   
          <Hompage/>
        </div> 
      }/>
       <Route path='/tagging' element=
      { 
        <div className="App"> 
   
          <Tag/>
        </div> 
      }/>
 
    </Routes>
  // </div>
    
    
  );
}
}
export default App;
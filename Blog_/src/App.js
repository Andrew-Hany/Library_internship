import React, {Component, useState, useLayoutEffect } from 'react';
// import logo from './logo.svg';
// import Side  from './components/newSide';
import Nav from './components/navbar';
import Hompage from './components/U_homePage';
import About from './components/about';
import Tag from './components/tagging';
import Rec from './components/blog2';
import GUI from './components/blog3';
import './App.css';
import './circle.css';
import { BrowserRouter,Routes,Route,Link,useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";




class App extends Component  {

  
  
  render(){
   
  return (
    
    // <div className="App">
     
    <Routes >
      <Route exact path='/' element=
      { 
        <div className="App"> 
   
          <Hompage/>
        </div> 
      }/>
      <Route path='/about' element=
      { 
        <div className="App "> 
   
          <About />
        </div> 
      }/>
       <Route path='/tagging' element=
      { 
        <div className="App "> 
   
          <Tag />
        </div> 
      }/>

      <Route path='/Face%20Recognition' element=
      { 
        <div className="App"> 
   
          <Rec/>
        </div> 
      }/>

<Route path='/GUI' element=
      { 
        <div className="App"> 
   
          <GUI/>
        </div> 
      }/>
 
   
 
    </Routes>
    
  // </div>
    
    
  );
}
}
export default App;
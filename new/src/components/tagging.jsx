import React, { Component } from 'react';
import Nav from './navbar';
import Im from './blog1.jpeg'
// import Im from './travelll.jpg'
import Cards from './cards';
import Footer from './footer';

// import Axios from "axios";
// import { Link } from 'react-router-dom';
export default class Tagging extends Component {
 


    render() {

        return (
            <div>

      

                
                     <Nav/>
                
                    <img src={Im} alt="Travel made easy" className="responsive-image" ></img>
                    <div className="Facial_recognition text-light Times">First Blog</div>
                   
                     
                   <Footer/>
                   
                  
            </div>
        )
    }

}
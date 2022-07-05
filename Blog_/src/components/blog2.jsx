import React, { Component } from 'react';
import Nav from './navbar';
import Im from './blog1.jpeg'
// import Im from './travelll.jpg'

import Footer from './footer';


export default class Rec extends Component {
 


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
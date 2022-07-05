import React, { Component } from 'react';
import Nav from './navbar';
import Im from './facial.jpg'
// import Im from './travelll.jpg'
import Cards from './cards';
import Footer from './footer';

// import Axios from "axios";
// import { Link } from 'react-router-dom';
export default class userhomepage extends Component {
 


    render() {

        return (
            <div>

      

                
                     <Nav/>
                
                    <img src={Im} alt="" className="responsive-image" ></img>

                    <div className="Facial_recognition">Facial recognition</div>

                    <div className="shadow bg-body bg-lighter">
                            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg">
                      
                                <div className="container-fluid shadow-lg m-1">
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <div className="text-start text-danger fs-5 fw-bold ml-3">Main Sub-Tasks</div>
                                    
                            


                            </div>
                            </div>
                                
                            {/* <button type="button" class="btn btn-success justify-content-md-end ml-3  pl-5 pr-5" onClick={()=>this.handelreset()}>Reset</button> */}
                                        
                        </nav>
                        
                    </div>
                    <Cards/>
                    
                     
                   <Footer/>
                   
                  
            </div>
        )
    }

}
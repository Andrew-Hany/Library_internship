import React, { Component } from 'react';
import Nav from './navbar';
import Im from './blog1.jpeg'
import Tag from './tagging.jpg'
import Tag2 from './tagging_pic2.JPG'
import Tag3 from './tagging_pic3.JPG'
import Tag4 from './tagging_pic4.JPG'
import Tag5 from './tagging_pic5.JPG'
import Tag6 from './tagging_pic6.JPG'
import Tag7 from './tagging_pic7.JPG'
import Tag8 from './tagging_pic8.JPG'
import Cards from './cards';
import Footer from './footer';

// import Axios from "axios";
import { Link } from 'react-router-dom';
export default class Tagging extends Component {
 


    render() {

        return (
            <div className=''>

      

                
                     <Nav/>
                    
                
                    <img src={Im} alt="Travel made easy" className="responsive-image" ></img>
                    <div className="Facial_recognition text-light Times"></div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg">
                    
                                <div className="container-fluid shadow-lg m-1">
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <div className="text-center text-danger fs-2 fw-bold ml-3">Tagging Feature</div>
                                    
                            


                            </div>
                            </div>
                                
                           
                                        
                        </nav>
                <div className=' container '>
                   
                       
                       
                        <div className=' row  '>
                            <div className='col-2 '>

                            </div>
                            <div className='col-8  bg-dark rounded mt-5 '>
                                <div className=' bg-light m-2 mt-4  rounded  p-2'>
                                    <div>&nbsp;</div>
                                    <div className='m-3 font-weight-bold fs1'>
                                        Problem Description
                                    </div >
                                    
                                    <p className=' '>  
                                    The problem that we are trying to solve is to enable the users to tag any number of people for a 
                                    given picture.
                                    <img className="rounded mx-auto d-block m-5 responsive-image2" src={Tag}/>
                                    </p>
                                    <div className=' mt-5 font-weight-bold fs1'>
                                        program output
                                    </div >

                                    <p className=' '>  
                                            Our program shows a picture with a square around all the faces. The users will be able to click on any of those 
                                            squares to tag the person. 
                                    </p>
                                    <img className="rounded mx-auto d-block m-5 responsive-image2" src={Tag2}/>
                                    
                                    <p className=' '>  
                                           I clicked on President Dallal to tag him and Then the program asked me to enter his name in the shell
                                    </p>
                                    <img className="rounded mx-auto d-block m-5 responsive-image2" src={Tag3}/>

                                    <p className=' '>  
                                           Then, There are two things happened. The first thing is the picture will appear again but with name tag
                                    </p>
                                    <img className="rounded mx-auto d-block m-5 responsive-image2" src={Tag4}/>
                                    <p className=' '>  
                                          The second thing  is to save a crropped face for President Dallal in a folder called "Dallal"
                                    </p>
                                    <img className="rounded mx-auto d-block m-5 responsive-image2" src={Tag6}/>
                                    <p className=' '>  
                                          Repeating the same steps for President Ricciardone, By clicking on his face, so the program will ask to write 
                                          down his name 
                                    </p>
                                    <img className="rounded mx-auto d-block m-5 responsive-image2" src={Tag7}/>
                                    <p className=' '>  
                                         After that, his name tag will appear beside his face
                                    </p>
                                    <img className="rounded mx-auto d-block m-5 responsive-image2" src={Tag5}/>

                                    <img className="rounded mx-auto d-block m-5 responsive-image2" src={Tag7}/>
                                    <p className=' '>  
                                    a crropped face for President Ricciardone is created in a folder called "Ricciardone"
                                    </p>
                                    <img className="rounded mx-auto d-block m-5 responsive-image2" src={Tag8}/>
                                    <p className='font-weight-bold'> 
                                        As you can see we are trying to build a database of well-known people to be able to use the database to train a model  
                                    </p>
                                    <div className='row'>
                                        <div className='text-left col-6'>
                                        <Link className='rounded bg-danger text-decoration-none text-dark p-2 text-right' to="/">Home</Link>
                                        </div>
                                        <div className='col-6 text-right'>
                                        <Link className='rounded bg-success text-decoration-none text-dark p-2 text-right' to="/Face%20Recognition">Next Blog</Link>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className='col-3'>

                            </div>
                            
                        </div>
                    </div>
               
                     
                   <Footer/>
                   
                  
            </div>
        )
    }

}
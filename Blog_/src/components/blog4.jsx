import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './navbar';
import Footer from './footer';


import Im from './blog1.jpeg'

export default class Future extends Component {
 


    render() {
        return (
            <div className='cointainer'>
                         <Nav/>
           
       
           <img src={Im} alt="Travel made easy" className="responsive-image" ></img>
           <div className="Facial_recognition text-light Times"></div>
           <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg">
           
                       <div className="container-fluid shadow-lg m-1">
                       <div className="collapse navbar-collapse" id="navbarSupportedContent">
                       <div className="text-center text-danger fs-2 fw-bold ml-3">Future Improvement</div>
                       
                   


                   </div>
                   </div>
                       
                  
                               
               </nav>
       <div className=' container '>
          
              
              
               <div className=' row  '>
                   <div className='col-2 '>

                   </div>
                   <div className='col-8  bg-dark rounded mt-5 '>
                    <div className=' bg-light m-2 mt-4  rounded  p-2'>
                       {/* ______________________________________________________________________________________________ */}
                       <div className='m-3 font-weight-bold fs1'>
                            Future Improvement
                        </div >
                        <ul  className='text-left'>
                            <li className='ml-3 '>Adding autocomplete functionality in Names</li>
                            <li className='ml-3'>Parallelize the recognition of all photos by using multi-threading techniques</li>
                            <li className='ml-3'>Add a functonality for viewing all the images for specific person</li>
                        </ul>
                     
                        
                       
                        <div className='row'>
                            <div className='text-left col-6'>
                            <Link className='rounded bg-danger text-decoration-none text-dark p-2 text-right' to="/GUI">Previous Blog</Link>
                            </div>
                            <div className='col-6 text-right'>
                            <Link className='rounded bg-success text-decoration-none text-dark p-2 text-right' to="/">Home</Link>
                            </div>
                        </div>
                        {/* ______________________________________________________________________________________________ */}
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
import React, { Component } from 'react';
import Nav from './navbar';
import Im from './blog1.jpeg'
// import Im from './travelll.jpg'
import B1 from './blog2_1.jpeg'
import B2 from './blog2_2.jpeg'
import B3 from './blog2_3.jpeg'
import B4 from './blog2_4.jpeg'


import Footer from './footer';

import { Link } from 'react-router-dom';
export default class Rec extends Component {
 


    render() {

        return (
            <div className=''>

      

                
            <Nav/>
           
       
           <img src={Im} alt="Travel made easy" className="responsive-image" ></img>
           <div className="Facial_recognition text-light Times"></div>
           <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg">
           
                       <div className="container-fluid shadow-lg m-1">
                       <div className="collapse navbar-collapse" id="navbarSupportedContent">
                       <div className="text-center text-danger fs-2 fw-bold ml-3">Face Recognition</div>
                           
                   


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
                                        <h3>
                            After we have tagged people and populated our database with photos of known people, we can recognize a person’s identity through two main steps:
                        </h3>
                        <ol>
                            <li>
                                <strong>
                                    Generating an encoding for each <i>known</i> person in the database using their faceprints.
                                </strong>
                                <p>
                                    Every face could be mapped out to a unique sequence of numbers known as a faceprint, and multiple algorithms are used to analyze the face features to generate its faceprint. The library we use <i>face-recognition 1.3.0</i> is built with deep learning whose model has an accuracy of 99.38% on the <a href="http://vis-www.cs.umass.edu/lfw/" target="_blank">Labeled Faces in the Wild</a> benchmark.
                    We can feed the encoding of a person of one or more faceprints. The more faceprints for a person, the more accurate the model becomes especially with the cases of looking-like faces, and definitely, this is at the cost of more time encoding generation and comparisons. 
                                </p>
                                <img className="responsive-image2" src={B1}/>
                            </li>
                            <li>
                                <strong>
                                    Recognize an <i>unknown</i> face in a photo.
                                </strong>
                                <p>
                                    This step is done by generating an encoding for this unknown face then comparing it to the encodings of different people in our database. Once we find a match between the encodings, this person is recognized. That is, to recognize a face and match it to a known person, we must have the person in our known database. If the face belongs to a person who is not in our database, then there is no way we can recognize them.
                                </p>
                                <img className="responsive-image2" src={B2}/>
                                <img className="responsive-image2" src={B3}/>
                                <img className="responsive-image2" src={B4}/>
                            </li>
                            <p className='mt-5 font-weight-bold'>Further development will include a machine learning model to work as a classifier 
                            as another approach to recognize faces once we have a large dataset, 
                            then we will compare both approaches to use the one with higher efficiency. We will Test the model accuracy and try to maximize
                            the model's accuracy

                            </p>



                        </ol>

                        <div className='row'>
                            <div className='text-left col-6'>
                            <Link className='rounded bg-danger text-decoration-none text-dark p-2 text-right' to="/tagging">Previous Blog</Link>
                            </div>
                            <div className='col-6 text-right'>
                            <Link className='rounded bg-success text-decoration-none text-dark p-2 text-right' to="/GUI">Next Blog</Link>
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
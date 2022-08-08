import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './navbar';
import Footer from './footer';


import Im from './blog1.jpeg'
import Im1 from './blog3_1.JPG'
import Im2 from './blog3_2.JPG'
import Im3 from './blog3_3.JPG'
import Im4 from './blog3_4.JPG'
import Im5 from './blog3_5.JPG'
import Im6 from './blog3_6.jpg'
import Im7 from './blog3_7.jpg'
import Im8 from './blog3_8.JPG'
export default class GUI extends Component {
 


    render() {
        return (
            <div className='cointainer'>
                         <Nav/>
           
       
           <img src={Im} alt="Travel made easy" className="responsive-image" ></img>
           <div className="Facial_recognition text-light Times"></div>
           <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg">
           
                       <div className="container-fluid shadow-lg m-1">
                       <div className="collapse navbar-collapse" id="navbarSupportedContent">
                       <div className="text-center text-danger fs-2 fw-bold ml-3">GUI</div>
                       
                   


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
                           USER GUIDE 
                        </div >
                        <div className='text-left m-4'>
                            <p> I will go through two main things:</p>
                            <li><a href="#point1" className='ml-3'>setup the environment</a></li>
                            <li><a href="#point2" className='ml-3'>A tour in the GUI</a></li>
                        </div>
                        <div className='m-3 font-weight-bold fs1' id="point1">
                            setup the environment 
                        </div >
                        <div className='text-left m-4'>
                            <p> To make the application work properly, you have to create a specific tree folder. You have to abide by the names of the folders below (except of the environment folder)</p>
                            <ul>
                                <li> 
                                    environment
                                    <ul>
                                        <li>
                                            Faces

                                            <ul><li>training_set</li></ul>
                                        </li>

                                        <li>
                                            images
                                            <ul>
                                                <li>Meta_data</li>
                                                <li>all images (.jpg,.jpeg,.png)</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>application executable</li>
                            </ul>
                        </div>
                        <img className="responsive-image2" src={Im5}/>
                        <div className='mt-3 border-bottom border-dark'></div>

                        <p className='text-left m-4'> <strong>training_set</strong> folder will contain folders for every person yoy tagged using the application (folders are automatically added inside once you tagged a person. These folders are used to train the model to recognize people automatically)</p>
                        <img className="responsive-image2" src={Im1}/>
                        <div className='mt-3 border-bottom border-dark'></div>

                        <p className='text-left m-4'><strong>images</strong> folder will contain all the photos you need to tag or recognize autmotically. The general meta file is stored here. This file will contain a csv file that has all the information about all the photos  </p>
                        <p className='text-left m-4'><strong>Meta_data</strong> folder will be the directory used by the application to store a meta file for each photograph. So you will find the meta files for the photos that are tagged or automatically recognized inside <strong>Meta_data</strong> folder</p>
                        <img className="responsive-image2" src={Im4}/>
                        <div className='mt-3 border-bottom border-dark'></div>

                        <div className='m-3 font-weight-bold fs1' id="point2">
                        A tour in the GUI
                        </div >
                        <p className='text-left m-4'> You will have two options either to tag or to recognize.</p>
                        <img className="responsive-image2" src={Im1}/>
                        <div className='mt-3 border-bottom border-dark'></div>

                        <p className='text-left m-4'> If you click on tag, it will let you upload an image (you shoud choose from the <strong>image</strong> folder in your enviroment)</p>

                        <img className="responsive-image2" src={Im2}/>
                        <div className='mt-3 border-bottom border-dark'></div>


                        <li className='text-left m-4'><span > Once it is uploaded, it will process the image and put squares around the faces. and each is tagged with a number</span></li>
                        <li className='text-left m-4'><span > You have to tag the faces in order and separate them with a comma, even if you dont know a face, you should put a comma and write unknown with nom. tag</span></li>
                        <img className="responsive-image2" src={Im3}/>
                        <div className='mt-3 border-bottom border-dark'></div>


                       <li className='text-left m-4'><span> when you click Save, the tags over their faces will change with the new tags </span></li> 
                       <li className='text-left m-4' > <span> Also, the general meta file folder will be updated </span></li> 
                       <li className='text-left m-4'> <span> a meta file for this image will be added or updated in the <strong>Meta_data</strong>folder and its name will be same as the image's name </span></li> 
                       <li className='text-left m-4'> <span> and finally, a new folder with the person's name will be add in <strong>training_set</strong>folder which will be used to train the model for recognition </span></li> 
                     
                        <img className="responsive-image2" src={Im6}/>
                        <div className='m-3 ml-5 mr-5  border-bottom border-info'></div>
                        <img className="responsive-image2" src={Im8}/>
                        <div className='m-3 ml-5 mr-5  border-bottom border-info'></div>
                        <img className="responsive-image2" src={Im7}/>
                        <div className='m-3 border-bottom border-dark'></div>
                        <a href="https://drive.google.com/file/d/1qyXPH_rBhkhXxJbT9zD_rOtRdOTPH2iI/view?usp=sharing" className='border-0 rounded bg-info text-decoration-none text-dark p-2 text-right'> Download from Google drive</a>
                        <div className='m-3 border-bottom border-dark'></div>
                        <div className="m-5"></div>
                       
                        <div className='row'>
                            <div className='text-left col-6'>
                            <Link className='rounded bg-danger text-decoration-none text-dark p-2 text-right' to="//Face%20Recognition">Previous Blog</Link>
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
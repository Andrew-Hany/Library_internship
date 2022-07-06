import React, { Component } from 'react';
import Nav from './navbar';
import Im from './Andrew.JPG'
import Im2 from './Shrief.jpg'

import Footer from './footer';

export default class About extends Component {
    render() {
        return (
            <div className="">
                    <Nav/>

                    <div className=' row m-5 bg-light rounded'>
                        <div className='col-4'>
                            <img className='profile_pic' src={Im}/>
                        </div>
                      
                        <div className='col-8 pt-5 mt-5 '>
                            <p> I am Andrew Zaki, Senior undergraduate computer engineering student at the American University in Cairo. 
                                I worked as a data science research assistant in the computer engineering department at Auc.
                                 I was an information security intern at NBE last summer.
                                  I am Passionate self-learning to fill the gaps between my curiosity and the knowledge I have.
                            </p>
                            {/* <p className=''>Email: andrewhany@aucegypt.edu</p> */}
                        </div>
                        
                    </div>
                    <div className='row  bg-dark text-light m-5 rounded'>
                    
                        <div className='col-8 pt-5 mt-5 '>
                            <p>I am Sherif Sakran, Senior computer engineering student at AUC 
                                with a double minor in business administration and mathematics.
                                I am Passionate about technology and entrepreneurship.
                            </p>
                        </div>
                        <div className='col-4 p-3'>
                            <img className='profile_pic ' src={Im2}/>
                        </div>
                    </div>
                    <Footer/>
                
                    
            </div>
        );
    }
}
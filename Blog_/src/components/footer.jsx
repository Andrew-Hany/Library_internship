import React, { Component } from 'react';
import Andrew from './Andrew.JPG'

import SH from './Shrief.jpg'

export default class footer extends Component {
    render() {
        return (
            <div className="footer bg-secondary">

                <div className="container">
                
                       
               
                    <div className=" mt-5 mb-5  border-bottom"></div>

                      <div className="fs-4 text-info fw-light">This website is created by a group of undergraduate students at AUC for the Library Internship</div> 
                        {/* contacts: */}
                        <div className="ml-5 fs-5 FloatLeft">
                            <img className=""/> 
                        </div>
                        <div className="fs-5  FloatLeft">
                            <img className=""/> 
                        </div>
                        
                        <div className="  fs-5 FloatLeft">
                      
                            <div className="">Andrew Nady </div> 
                            <img src={Andrew} className="photo "/> 
                        </div>
                   

                        <div className=" fs-5 FloatLeft">
                            <div>Shrief</div> 
                            <img src={SH} className="photo "/> 
                        </div>
                    
                     </div>
                    
            </div>
        );
    }
}
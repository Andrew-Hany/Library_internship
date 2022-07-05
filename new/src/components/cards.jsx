
import React, { Component } from 'react';

import GUI from './GUI.jpg'
import Face from './Face2.jpeg'
import Tag from './tagging.jpg'
import Card from './card';


// import Axios from "axios";
// import { Link } from 'react-router-dom';
export default class Cards extends Component {
        state={
                cards:[
                    {"task":"tagging",
                     "desciption":"asdfghjkdsfsrweer wedccjhgcscjh vdjkafvhdsvfk asdfjasgfadsg fsdkjashgfa",
                     "Im":Tag,
                     "percentage":100,
                     "color":"green"},
                    {"task":"Face Recognition", "desciption":"asdfghjkdsf srweerwedccj hgcscjhvdjkafvh dsvfkasdf jasgfadsgfsdkjashgfa","Im":Face,"percentage":100,"color":"green"},
                    {"task":"GUI", "desciption":"asdfghjkdsfsrwe erwedccjhgcscjhvdjk afvhdsvfkasdfjasg fadsgfsdkjashgfa","Im":GUI,"percentage":0,"color":"red"},
                    // {"task":"2"}
                ]
        }


    render() {

        return (
            <div className='container mt-4'>
                 {this.state.cards.slice(0, 8).map((card) => (
             
                    <Card
                    task={card.task}
                    desciption={card.desciption}
                    Im={card.Im}
                    percentage={card.percentage}
                    color={card.color}
                    />
                
                )) } 
            </div>
            )
        }
    
    }
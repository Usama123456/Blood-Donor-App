import React, { Component } from 'react';
import * as firebase from 'firebase';
import './App.css';
import {hashHistory} from 'react-router';


export default class bloodg extends Component{
    render(){
        return(<div>
             <ul id='hide'>
       <li>A+</li>
       <li>B+</li>
       <li>AB+</li>
       <li>A-</li>
       <li>B-</li>
       <li>AB-</li>
       <li>O+</li>
       <li>O-</li>
       </ul>
       </div>
        )
    }
}
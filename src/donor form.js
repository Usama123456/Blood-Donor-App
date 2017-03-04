import React, { Component } from 'react';
import * as firebase from 'firebase';
import './App.css';
import {hashHistory} from 'react-router';
import bloodg from './bg';



export default class Donorform extends Component{
render(){
    return(<div>
        <h1>Donor Registration Form</h1>
        <input placeholder='Password'ref='pass' type='name'></input> <br/><br/>
        <input placeholder='Password'ref='pass' type='age'></input> <br/><br/>
        <input placeholder='Password'ref='pass' type='email'></input> <br/><br/>
       <ul>
       <li id='main' onHover={bloodg}><a href='#'>Blood Group</a></li>

      
       </ul>
        
        </div>          
        
    )
}
}


import React, { Component } from 'react';
import * as firebase from 'firebase';
import './App.css';
import {hashHistory} from 'react-router';

class Signup extends Component {
   constructor(props){
       super(props)
   this.sigup=this.sigup.bind(this);
} 


sigup(s){
    s.preventDefault();
    const useremail=this.refs.email.value;
     const userpass=this.refs.pass.value;
     console.log(useremail);
    console.log(userpass); 
    const promise=firebase.auth().createUserWithEmailAndPassword(useremail,userpass);
    promise.then(user=>{
        alert("Sign Up successful!");
        hashHistory.push('./signin')
    })   
}

    render(){
        return(
            <div>
            <center>
            <br/> <br/> <br/> <br/> <br/>
            <label>User email:</label><br/>
            <input placeholder='User email' type='email' ref='email'></input>  <br/> <br/>
<label>Password:</label><br/>
            <input placeholder='Password' type='password' ref='pass'></input> <br/><br/>
            <button onClick={this.sigup}>Sign Up!</button>
            </center>
            </div>
        )
    }
}

export default Signup;
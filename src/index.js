import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import *as firebase from 'firebase';
import Signup from './signup';
import Signin from './signin';
import {Router , Route , Link  , hashHistory} from 'react-router';
<script src="https://www.gstatic.com/firebasejs/3.7.0/firebase.js"></script>
import Donorform from './donor form';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC77MbLOj0b-cxb92yq-JNhihMw__Uh4P0",
    authDomain: "blood-donor-app-f485f.firebaseapp.com",
    databaseURL: "https://blood-donor-app-f485f.firebaseio.com",
    storageBucket: "blood-donor-app-f485f.appspot.com",
    messagingSenderId: "982540205499"
  };
  firebase.initializeApp(config);


class Start extends React.Component {
  render(){
    return <div>
    <center>
    
    <br/> <br/> <br/> <br/> <br/>
    <h2>Blood Donor App</h2>
    <br/>
   <Link to='./signup'> <button>Sign Up</button></Link>
   
    <Link to='./signin'> <button>Sign In</button></Link> 
    </center>
    </div>
  }
}



ReactDOM.render(
  <Router history={hashHistory}>
  <Route path='/' component={Start}></Route>
  <Route path='./signup' component={Signup}> </Route>
  <Route path='./signin' component={Signin}></Route>
  <Route path='./donor form' component={Donorform}></Route>
  
  </Router>,
  document.getElementById('root')
);

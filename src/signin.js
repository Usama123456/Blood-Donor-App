import React, { Component } from 'react';
import * as firebase from 'firebase';
import './App.css';
import {hashHistory,Link} from 'react-router';
import './donor form';


class Signin extends Component {
    constructor(props){
        super(props)



this.sigin=this.sigin.bind(this);
this.state= {
    useremail: "",
    userpass : ""
    

}
    }





sigin(ev){
    ev.preventDefault();
        // const emailNode=findDOMNode(this.refs.email)
        const useremail = this.refs.email.value;

        const userpass=this.refs.pass.value;
        const error=this.refs.error;
    console.log(useremail);
    console.log(userpass);
    // console.log(mess)
    const promise=firebase.auth().signInWithEmailAndPassword(useremail,userpass);
    promise.then(user=>{
        alert("Sign In Successful!!!!!")
        hashHistory.push('./donor form')
    promise.catch(e =>error.innerHTML=e.message )
    }

    )
}
    render(){

        return(

            <div>

            <center>
            <br/> <br/> <br/> 
            <h2>Sign In</h2>
            <p ref='error'></p>
            <br/> <br/>
            
            <input placeholder='Email' ref='email' type='email'></input>  <br/> <br/>
            <input placeholder='Password'ref='pass' type='password'></input> <br/><br/>
            <Link to='./donor form'><button onClick={this.sigin}>Sign In</button></Link>
            </center>
            </div>
        )
    }
}

export default Signin;
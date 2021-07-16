import React from 'react';
import { Component } from "react";
import '../../App.css';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import SignUp from '../registerform';


function Register() {
    return (
      <>
        <SignUp />
        <Footer />
      </>
    );
  }
  
export default Register;


// export default  function Register() {

// return <h1 className='Register'></h1>;
// }

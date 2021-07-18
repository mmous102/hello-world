import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import { Container } from 'react-bootstrap';
import './help.css'

function help() {
  return (
    <>
    <div className="page" style={{backgroundColor:"lightblue", paddingTop:"20px"}}>
   <div className="containerhelp">
       <div className="title">
       <h1>Welcome to our Help Section!</h1>
       <h3>You will find an outline of the content on each section on our website!</h3>
       </div>
    <div className="contenthelp">
        <h3>HOME</h3>
        <p> This is our landing page. It can be reached both by cliking on "Home" 
        navigation button or by clicking on our logo at the top-left of every page.
        On this page you will find our slogan displayed on our animated image. 
        You will also find our past adventures and a preview of some activities offered by our camp.</p>
 
        <p>Please contact us if you have furthur questions.</p>
      </div>
      <div className="contenthelp">
        <h3>Evaluate</h3>
        <p> This is our very fun animated page. It can be reached both by cliking on "Evalute" 
        navigation button at the top-right of every page.
        On this page you will find our highly designed survey. By filling the survey, you will have an idea 
        of which activity is best suited for you.</p>
 
        <p>Please contact us if you have furthur questions.</p>
      </div>
      <div className="contenthelp">
        <h3>Activities</h3>
        <p> This is our another fun and animated page. It can be reached both by cliking on "Activities" 
        navigation button at the top-right of every page. This page is available in both french and english!
        On this page you will find our list of camp grounds and a our full list of activites. However, 
        we do suggest you to Subscribe to our newsletter to get the most updated list send to you.</p>
 
        <p>Please contact us if you have furthur questions.</p>
      </div>
      <div className="contenthelp">
        <h3>Sign-up</h3>
        <p> This is our final and most important page. It can be reached both by cliking on "Sign-up" 
        navigation button at the top-right of every page.
        On this page you will find our registraion page to join the curiosity campers.</p>
 
        <p>Please contact us if you have furthur questions.</p>
 

      </div>
    </div>
    <br/>
    <h3 style={{textAlign:"center"}}>If you require furthur help, please contacts us using our phone number or email displayed below.</h3>
    <br/>      
    <Footer />
    </div>
    </>
  );
}

export default help;
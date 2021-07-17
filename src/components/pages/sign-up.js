import './index.css';
import React, { Component } from "react";
import Footer from '../Footer';


export default class signup extends React.Component {
    
    render() {
        return (
            <div className="top">
            <div className="base-container">
                <div className="header"> Register </div>
                <div className="content">
                <div className="form">
                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <br/>

                <button type="submit" className="btn ">Register</button>
                
            </div>
            </div>
            </div>
            <Footer/>
            </div>
        );
    }
}
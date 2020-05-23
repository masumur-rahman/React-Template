import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export  class Navbar extends Component {
    render() {
        return(
            <div>
                {/* ======= Header ======= */}
                <header id="header" className="fixed-top">
                    <div className="container d-flex align-items-center">
                        <h1 className="logo mr-auto"><NavLink className='active' to='/'>Business</NavLink></h1>
                        {/* Uncomment below if you prefer to use an image logo */}
                        {/* <a href="index.html" class="logo mr-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
                        <nav className="nav-menu d-none d-lg-block">
                            <ul>
                                <li><NavLink className='active' to='/'>Home</NavLink></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#services">Services</a></li>
                                <li><a href="#portfolio">Portfolio</a></li>
                                <li><a href="#team">Team</a></li>
                                <li><NavLink to='/contact'>Contact</NavLink></li>
                            </ul>
                        </nav>{/* .nav-menu */}
                        <a href="#about" className="get-started-btn scrollto">Get Started</a>
                    </div>
                </header>
                {/* End Header */}
            </div>

        )
    }
}
export default Navbar
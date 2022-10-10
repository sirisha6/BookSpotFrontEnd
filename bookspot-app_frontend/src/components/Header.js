import React from 'react';
//import './App.css';
import logo1 from './logo1.png';
import image1 from './image1.jpg';

import book1 from './book1.jpg';
import logo8 from './logo8.PNG';
import siri from './siri.jpg';
import { Outlet, Link } from "react-router-dom";
function Header() {
	return (
		<div>
			<nav class="navbar">
				<ul class="nav-list">
					<div class="logo">
						 <img src={siri} />
					</div>
                    <div class="title">
                        <h1>&ensp;&ensp;&ensp;&ensp;
                        &ensp;&ensp;Book Spot</h1>
                    </div>
                    
					
                    
				</ul>
                {/* <div class="heading">
                        <h2>Make your life prosperous by reading books</h2>
                    </div> */}

				<div class="rightNav">
					<ul class="ul_list">
                    <Link to="/About us">About us</Link>
                     &ensp;
                     &ensp;
					 <Link to="/login">Login</Link>
                    &ensp;
                    &ensp;
					<Link to="/Register">Register</Link>
                    &ensp;
                    &ensp;
                    </ul>
				</div> 
		    </nav> 
            </div>
    );
    }
    export default Header;
import React from 'react';
//import './App.css';
import logo1 from './logo1.png';
import image1 from './image1.jpg';
import bookbg7 from './bookbg7.jpg';
import book1 from './book1.jpg';
import { Outlet, Link } from "react-router-dom";
import siri from './siri.jpg';
import Footer from './Footer';
import './Home.css';
import Aboutus from './Aboutus';
function Home() {
	return (
		<div>
			<nav class="navbar">
				<ul class="nav-list">
					<div class="logo">
						 <img src={siri} />
					</div>
					<div class="title">
                        <h1>&ensp;&ensp;&ensp;&ensp;
                        &ensp;&ensp;BOOK SPOT</h1>
                    </div>
					
                    {/* <div class="heading">
                        <h2>&ensp;&ensp;&ensp;&ensp;&ensp;Make your life prosperous by reading books</h2>
                    </div> */}
				</ul>

				<div class="rightNav">
					<ul class="ul_list">
                    <Link to="/Aboutus">About us</Link>
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

            <nav class="bg">
                <img  class='img' src={bookbg7} alt="books" width="1500px" height="800px"/>
					<div className='txt'>
					<h2 className='second-txt'>That's the thing </h2>
					<h2 className='third-txt'>About books</h2>
					<h2 className='four-txt'>They let you </h2>
					<h2 className='five-txt'>travel without</h2>
					<h2 className='six-txt'>moving your feet !</h2>
					</div>
            </nav>
			
			{/* <footer className="footer">
				<p className="text-footer">
					Copyright ©-All rights are reserved
				</p>
			</footer> */}
			<Footer/>
		</div>
	)
}

export default Home



// const Layout = () => {
// 	return (
// 	  <>
// 		<nav>
// 		  <ul>
// 			<li>
// 			  <Link to="/">Home</Link>
// 			</li>
// 			<li>
// 			  <Link to="/login">login</Link>
// 			</li>
// 			<li>
// 			  <Link to="/Registration">Register</Link>
// 			</li>
// 		  </ul>
// 		</nav>
  
// 		<Outlet />
// 	  </>
// 	)
//   };
  
//   export default Layout;
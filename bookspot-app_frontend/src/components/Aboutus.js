import React from "react";
// import greenlogo from "./greenlogo.PNG";
// import bg1 from "./bg1.jfif";
// import dogpic from "./dogpic.jpeg";
import "./Aboutus.css";
import "./Home.css";
import siri from './siri.jpg';
import Footer from "./Footer";

// import logoandname8 from "./logoandname8.png";
// import adoptdog from "./adoptdog.jpg";
// import NavBar from "./NavBar";
function Aboutus() {
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
            </ul>
            </nav>
        <div class="flex-container">
            {/* <div className="about"><h3>About us</h3></div> */}
        <div class="flex0"/>
        <div class="flex1a">   </div>
        <div class="flex2a">
          <div class="fpa">
          <p>Dear readers,

We offer a tremendous gathering of books in the various classifications of Fiction, Non-fiction, Biographies, History, Religions, Self – Help, Children. We likewise move in immense accumulation of Investments and Management, Computers, Engineering, Medical, College and School content references books proposed by various foundations as schedule the nation over. Other than this, we likewise offer an expansive gathering of E-Books at reasonable valuing.

We endeavor to broaden consumer loyalty by providing food simple easy using web indexes, brisk and easy-to-understand installment alternatives, and snappier conveyance frameworks. Upside to the majority of this, we are arranged to give energizing offers and charming limits on our books.

Too, we modestly welcome every one of the merchants around the nation to band together with us. We will without a doubt give you the stage to many shimmering areas and develop the “Organization Name” family. We might want to thank you for shopping with us. You can keep in touch with us for any new musings at “email-id” helping us to ad-lib for the peruser fulfillment. </p>
            </div> 
        </div>
        <div class="flex3a"></div>
        <div class="flex0"/>
    </div>
        <div class="aboutbox">
       
        </div>
        <footer className="foot">
				<p >
					Copyright ©-All rights are reserved
				</p>
			</footer>
        </div>
      
  );
}

export default Aboutus;

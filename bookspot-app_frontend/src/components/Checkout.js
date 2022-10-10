// import React from "react";

// function Checkout(){
//     return(
//         <div className="check">
//             <h2>Paymet Successfull</h2>

//         </div>
//     );

// }
// export default Checkout;
// import { useState } from 'react';
// import Button from '../Button/ButtonBody';

// import axios from 'axios';
// import { useNavigate } from "react-router-dom";
// import Top from '../Top/TopBody';
// import Footer from '../Footer/Footer';
// import { Placeholder } from 'react-bootstrap';
import { useCart } from 'react-use-cart';
import './checkout.css';
import sbi from './sbi.jpg';
import Footer from './Footer';
// import Header from '../Header/HeaderBody';



const Checkout = () => {
    const {
       
        emptyCart,
    } = useCart();
    

    const PlaceOrder=()=>{

        alert("order placed succesfully");
        emptyCart();
        const totalPath = `/Cart`;
//   history.push(totalPath);

    }


    return(
        <div className='paidbdy'>
            
        <div className='paid'>
            {/* <Top />
            <Header /> */}
            <h1>Enter Card details</h1>
            <div className='image2'>
                <img src={sbi}></img>
            </div>
            <div className='card'>
            <input className='register-form-element'  placeholder="Card Name" required type='text'></input>
            <input className='register-form-element'  placeholder="Card Number" required type='number'></input>
        {/* <br></br> */}
            <input className='register-form-element'  placeholder="Cvv" required type='password'></input>
            <button onClick={e => PlaceOrder(e)} className='btn5'>Submit</button>
           
            </div>
             {/* <h3>Paid succesfully</h3> */}
             {/* <img src={thanku} /> */}
        </div>
        <footer className="foot">
				<p >
					Copyright ©-All rights are reserved
				</p>
			</footer>
        </div>
    )
}

export default Checkout;


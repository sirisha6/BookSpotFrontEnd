import React, { useEffect, useState } from "react";
import siri from './siri.jpg';
  import Product from './ProductBody';
  import Footer from './Footer';
  import {useCart} from 'react-use-cart';
  import './product.css';
  import Aboutus from './Aboutus';
//   import {useState} from 'react';
// import wingOfFire from './wingsOfFire.jpg';
// import Header from "./Header";
// import Alchemist from './Alchemist.jpg';
// import Hobbit from './Hobbit.jpg';
// import Stranger from './Stranger.jpg';
// import BlackBoy from './BlackBoy.jpg';
// import Lowboy from './Lowboy.jpg';
// import Cave from './Cave.jpg';
// import BeStrong from './BeStrong.jpg';
// import gandhi from './gandhi.jpg';
// import Einsten from './Einsten.jpg';
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';

import { Outlet, Link } from "react-router-dom";
import Button from "./Button";
// import th from './th.jpg';
import './page.css';
function Page(){
    const {
        isEmpty,
        totalItems,
    } = useCart();
    const [productitem, setProductitem] = useState([]);
    const username=sessionStorage.getItem("username");
    const [error, setError] = useState({});
    const getCookie = (cname) => {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    const signoutHandler = () => {
        console.log("logout")       
        console.log(window.location);
        document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        window.location.href = '/Login';
    }
    // const authenticateUser = (data) => {
    //     console.log(data);
    useEffect(()=>{
        fetch("http://localhost:8080/api/auth/product_list")
        
     .then((res) => res.json()) .then(
        (result) => {
        console.log("called get items");
            console.log(result);
            setProductitem(result);
        },
        (error) => {
        setError(error);
} );
}, []);
    return(
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
                
                      {getCookie("accessToken") &&
                    <div className='login-register'>
                        <label className="user" >Hi  {username} !  &ensp; </label>
                        {/* <a href='/login'><Button text='My Orders' /></a> */}
                        {/* <a href='/Aboutus'><button className="btn btn-sm" >Aboutus</button></a> */}

                        <a href='/Cart'><button className="btn btn-sm" >Cart({totalItems})</button></a>
                        {/* <a href="/cart"><span className="margin_left_20px">Cart{totalItems}</span></a> */}
                        {/* <a href='/register'><Button text='Profile' /></a> */}
                        <Link to="/Logout" onClick={signoutHandler} > <button className="btn btn-sm" >Logout</button> </Link>

                    </div>
            }
        </nav> 
        <div class="body">
                    <div className='all-products-contain'>
      
        
                 
            {productitem && productitem.map((productitems,i) => (
                <Product
                    // imgSrc={productitems.image}
                    // name={productitems.name}
                    // price={productitems.price}
                    data={productitems}
                    key={i}
                />
                
                ))}
            
            </div>
            </div>
        {/* {<Product 
            imgSrc={Cave}
            bookName="The Cave"
            price="300"
        />}
         { <Product
            imgSrc={Hobbit}
            bookName="The Hobbit"
            price="150"
        />}
        { <Product
            imgSrc={Stranger}
            bookName="The Stranger"
            price="250"
        />}
         { <Product
            imgSrc={BlackBoy}
            bookName="Black Boy"
            price="200"
        />}
         { <Product
            imgSrc={Lowboy}
            bookName="Black Boy"
            price="200"
        />}
         { <Product
            imgSrc={Alchemist}
            bookName="Black Boy"
            price="200"
        />}
         { <Product
            imgSrc={BeStrong}
            bookName="Fear not:Be Strong"
            price="200"
        />}
          { <Product
            imgSrc={Einsten}
            bookName="Albert Einsten"
            price="500"
        />}
         { <Product
            imgSrc={gandhi}
            bookName="Truth and Power"
            price="500"
        />} */}


        <Footer />

    </div>
    )
    
}
export default Page;
import logo from './logo.svg';

import './App.css';

import { Route, Routes, BrowserRouter } from "react-router-dom";

import Login from './components/Login';

import Register from './components/Register';

import Home from './components/Home';

import React from 'react';
import Page from './components/Page';
import Cart from './components/Cart/Cart';
import Logout from './components/Logout';
import { Outlet, Link } from "react-router-dom";
import {CartProvider} from 'react-use-cart'
import Aboutus from './components/Aboutus';
import Checkout from './components/Checkout';

class App extends React.Component {

  constructor(props){

      super(props)

  }



  render()

  {

      return(

    // <div className='App'>

    //  <BrowserRouter>
    <CartProvider>
      <BrowserRouter>
          <Routes >

         <Route path="/" element={<Home  />}/>

                <Route path="/Login" element={<Login  />} />

                <Route path="/Register" element={<Register />} />
                <Route path="/Page" element={<Page/>}/>
                <Route path="/Cart" element={<Cart />} />
                <Route path="/Logout" element={<Logout />}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/Aboutus' element={<Aboutus/>}/>
                <Route path='/Checkout' element={<Checkout/>}/>

      </Routes>
</BrowserRouter>
    
     </CartProvider>

    //  </div>

     );

    }

}

export default App;


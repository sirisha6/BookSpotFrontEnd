import React, { useState } from "react";
// import { Button, Container, Col, Row, Table} from 'react-bootstrap';
import { useCart } from 'react-use-cart';
// import { useThemeHook } from '../GlobalComponents/ThemeProvider';
// import { BsCartCheck, BsCartX} from 'react-icons/bs';
import { Button, Container, Col, Row, Table} from 'react-bootstrap';
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';
// import Header from '../Header/HeaderBody';
// import Top from '../Top/TopBody';
// import Footer from '../Footer/Footer';
// import Cart from './components/Cart.js';
import './cart.css';
import Checkout from '../Checkout';
import { useNavigate } from 'react-router';
const Cart = () => {
    const navigate=useNavigate();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const {
        // isEmpty,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

    const pay=()=>{

        alert("order placed succesfully");
        emptyCart();
        const totalPath = `/Cart`;
//   history.push(totalPath);

    }
    const insertAction=(e)=>{
        alert("Redirecting to payment.Click ok to continue...")
        navigate("/Checkout");
    }
     
    const renderForm=(
       <>
        {/* <Top />
        <Header /> */}
        {/* <Container className="py-4 mt-5"> */}
        <h1 >Cart Details</h1>
        
       
            
        {/* <Row className="justify-content-center"> */}
                {/* <table responsive="sm" striped bordered hover  className="mb-5"> */}
                <table>
               
                    <tbody>
                    {items.map((item, index)=>{
                            return(
                                <tr key={index} >
                                    <td>
                                        <div style={{ background: 'white', height: '8rem', overflow: 'hidden', display: 'flex',
                                        justifyContent: 'center', alignItems: 'center',borderBlockStyle:'20px' ,}}>
                                            <div style={{ padding: '.2rem'}}>
                                                <img src={item.image} style={{ width: '4rem'}} alt={item.name} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <h2 style={{ whiteSpace: 'nowrap', width: '14rem', overflow: 'hidden', textOverFlow: 'ellipsis'}}>
                                            {item.name}
                                        </h2>
                                    </td>
                                    <td>Rs. {item.price}</td>
                                    <td>Quantity ({item.quantity})</td>
                                    <td>
                                        <button onClick={()=> updateItemQuantity(item.id, item.quantity - 1)} className='minus'><h2>-</h2></button>
                                        <button onClick={()=> updateItemQuantity(item.id, item.quantity + 1)} className='plus' ><h2>+</h2></button>
                                        <button variant="danger" onClick={()=> removeItem(item.id)} className='remove' >Remove Item</button>
                                    </td>
                                </tr>
                               
                            )
                        })}
                                {/* <tr>
                                    <td>
                                        <div style={{ background: 'white', height: '8rem', overflow: 'hidden', display: 'flex',
                                        justifyContent: 'center', alignItems: 'center' }}>
                                            <div style={{ padding: '.5rem'}}>
                                                <img src="Product Image"style={{ width: '4rem'}} alt="Product Image" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <h6 style={{ whiteSpace: 'nowrap', width: '14rem', overflow: 'hidden', textOverFlow: 'ellipsis'}}>
                                         "Product Name"
                                        </h6>
                                    </td>
                                    <td>Rs. 30</td>
                                    <td>Quantity </td>
                                    <td>
                                        <Button onClick={()=> updateItemQuantity()} className="ms-2">-</Button>
                                        <Button onClick={()=> updateItemQuantity()} className="ms-2">+</Button>
                                        <Button variant="danger" onClick={()=> removeItem()} className="ms-2">Remove Item</Button>
                                    </td>
                                </tr> */}
                            
              
                    </tbody>
                </table>
                
                    {/* <Row > */}
                        <div className='totalprice'>
                            <h2>Total Price: Rs. {cartTotal}</h2>
                        </div>
                        <div className='checkout'>
                        {/* <a href="/Checkout"  > */}
                            <button variant="success"
                                className="success"   onClick={(e)=>insertAction(e)} >
                               <h1>PAYMENT</h1>
                               {/* <a href="/Checkout"  ></a> */}
                            </button>
                        </div>
                        
          
        
           
            {/* <Footer/> */}
                 
       </>
       
    );
    return(
        <div>
     
      {isSubmitted ? navigate("/Checkout") : renderForm}
    
      </div>
    
    
    );
}

export default Cart;
import { Link } from 'react-router-dom';
// import Button from '../Button/ButtonBody';
import './product.css';
import axios from 'axios';
import Button from './Button';
import {useCart} from 'react-use-cart';

const Product = (props) => {
let {image,price,name}=props.data;
const { addItem } = useCart();

    const addToCart = () =>{
        addItem(props.data);
        alert('Added to cart successfully')
        console.log(props.data);
    }
    return (
        <div>
            <div className='product-container'>
                <div className='product-image-container'>
                    <img width="80%" src={image}/>
                </div>
                <div className='product-details-container'>
                    <h2>{name}</h2>
                    <h4>Price:{price}</h4>
                </div>
                {/* <Button  text='Add To Cart' onClick={()=> addToCart()}/> */}
                <button className="hi" onClick={()=> addToCart()}><b>Add to cart</b></button>

            </div>
        </div>
    )
}

export default Product;
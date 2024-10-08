import { Button } from '@mui/material'
import React from 'react'
import {useDispatch} from "react-redux";
import { addToCart } from '../redux/CartSlice';
import './Product.css'
const Product = ({id,image,brand, description, price}) => {

    //to add data to store
    const dispatch= useDispatch();
    // if (!productData) {
    //   return <div>No products available.</div>;
    // }
  
  return ( 
    // 
    //    <div>
    //         {productData.map((product) => (
    //             <div key={product.id}>
    //                 <img src={product.image} alt={product.description}></img>
    //                 <p>{product.description}</p>
    //                 <h3>Rs: {product.price}</h3>
    //                 <Button onClick={() => dispatch(addToCart(product))}>Add To Cart</Button>
    //             </div>
    //         ))}
    //     </div>
    // 

    <>
    <div className='outerimage'>
    <h1 className="brandName">{brand}</h1>
            <img src={image} alt='' className='image'></img>
        <div className="product">
        <span className="description">{description}</span>
        <h3 className="price">₹{price}</h3>
        <button onClick={() =>dispatch(addToCart({id,image,brand, description, price}))}
            className='addToCart'
            >
Add To Cart
        </button>

        
        </div>
        </div>
    </>
  )
}

export default Product

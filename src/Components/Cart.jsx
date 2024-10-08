import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeSingleProduct } from '../redux/CartSlice';

const Cart = () => {
  // Get product data from the Redux store
  const storeData = useSelector(state => state.cart?.productData || []);
  console.log(storeData);

  const dispatch = useDispatch();

  return (
    <div className='cart'>
      <h2>Cart</h2>
      <p className='prodcutcount'>Count of products: {storeData.length}</p>

      {/* Display data in cart */}
      {storeData.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        storeData.map((product) => (
          <div className='cartnumber' key={product.id}>
            <p>Price: ₹{product.price}</p>

            {/* Remove button */}
            <button
              onClick={() => dispatch(removeSingleProduct(product.id))} // Pass only product.id
              className='addToCart'
            >
              Remove from Cart
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;

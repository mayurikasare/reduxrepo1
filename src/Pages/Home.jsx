import React, { useEffect, useState } from 'react'
import Cart from '../Components/Cart' 
import Product from '../Components/Product'
import bookImage from '../Images/book2.jpg'; // Adjust the path if necessary
import bookImage1 from '../Images/book3.jpg'
import bookImage2 from '../Images/book4.jpg'
import bookImage3 from '../Images/book5.jpg'
import bookImage4 from '../Images/book1.jpg'


const Home = () => {

    // const[productData,setProductData]=useState([]);

    // const url="https://fakestoreapi.com/products";

    // useEffect(()=>{
    //     //code 
    //     //function to get data from api
    //     async function getDataFromApi(){
    //         const response =await fetch(url);
    //         const data=await response.json();
    //         setProductData(data);
    //     }
    //     getDataFromApi();
    // },[]);
  return (
    <div>
      {/* <Product productData={filterData}/> */}
      <hr/> 
      <Cart/>

      {/* // */}
      <div className="productContainer">
        <Product
          id="1"
          image={bookImage}
          brand="Be Awara"
          description="Kids Printed Full Sleeves T-shirt and Trackpant Set, 100% Cotton Soft "
          price="951"
        />

         <Product
          id="2"
          image={bookImage1} 
          brand="Sporto"
          description="Solid Polo T-Shirt for Men | Wrinkle-Free with Colour Lock Technology "
          price="650"
        />
        <Product
          id="3"
          image={bookImage2}
          brand="Allen Solly"
          description="Men's Regular Fit Polo "
          price="882"
        />
        <Product
          id="4"
          image={bookImage3} 
          brand="Amazon Brand - Symbol"
          description="Men's Cotton Rich Solid Polo T-Shirt Regular Fit (Available in Plus Size) "
          price="399"
        />
        <Product
          id="5"
          image={bookImage4} 
          brand="EYEBOGLER"
          description="Men's Trendy Polo Neck Half Sleeves Regular Fit Checkered T-Shirt"
          price="399"
        />
        <Product
          id="6"
          image={bookImage4} 
          brand="Lux Cozi"
          description="Men's Regular Fit Polo Neck Half Sleeve Solid Casual T-Shirt | Polo T-Shirt for"
          price="399" 
         /> 
      </div>
    </div>
  )
}

export default Home

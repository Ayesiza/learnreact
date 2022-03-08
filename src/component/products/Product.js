import React from 'react'
import { Link } from 'react-router-dom';

const Product = ({product}) => {
  return (
    <div className='product'>
        <div>
            <img src={`./images/${product.img}.jpg`}  alt={`${product.name}`}/>
        </div>
        <div className='descContainer'>
            <h2 className='title'>{product.name}</h2>
            <p>$ {product.price}</p>
            <button>ADD TO CART</button>
            <a to={'/#'} >Details &#859;</a>

        </div>
        <p>{product.id}</p>
        <p>{product.price}</p>
        <p>{product.category}</p>
        <p>{product.name}</p>
        </div>
  )
}

export default Product;
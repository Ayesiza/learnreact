import React from 'react'
import Product from './Product'

const products = [
    {
        id:"1",
        name:"Iphone",
        price:"500shs",
        category:"phones",
        img:"mugi2"
    
    },
    {
        id:"2",
        name:"laptop",
        price:"500shs",
        category:"computers",
        img:"mugi1"
    
    },

]

const Products = () => {
  return (
    <div>
        {products.map(product =>(
            <Product   product={product} />
            ))}
    </div>
  )
}

export default Products
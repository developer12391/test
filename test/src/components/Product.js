import React from 'react';
import s from './Products.module.css';

let Product = ({product}) => {
    return (<>
      
                    <td>{product.name}</td>
                    <td>{product.bsr_category}</td>
                    <td>{product.stars}</td>
                    <td>{product.brand}</td>
                    <td>{product.weight}</td>
                    <td>{product.updated_at}</td>
                    <td>{product.price} {product.currency}</td>
                    <td><img src={product.img} alt="product" className={s.product}/></td>
                    <td><a href={product.link}>Product Link</a></td>
                    <td >{product.size}</td>
                    <td>{product.daily_sales}%</td>
        
        </>
    )


}

export default Product;
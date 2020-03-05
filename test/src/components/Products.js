import React from 'react';
import s from './Products.module.css';
import Product from "./Product";


let Products = React.memo(({products,name,_handleNameChange, ...props}) => {
    return (<>
            <table>
                <thead>
                    <tr>
                      <th>Id</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Stars</th>  
                        <th>Brand</th> 
                        <th>Weight</th>
                        <th>Updated</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Link</th>
                        <th>Size</th>
                        <th>Daily sales</th>
                     </tr>
                </thead>
                <tbody>
                
                {products.map((u, index) => <tr >
                    <Product product={u}  key={index} id={index}/>
                          </tr>
                )}
                 </tbody>
                </table>
            </>

    )

})
export default Products;
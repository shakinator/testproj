import React from 'react';
import "./Products.css";
import { useStateValue } from './StateProvider';

function Product({title,image,price,rating,id}) {
    const [{basket},dispatch] = useStateValue();


    const addToBasket = () => {
        //dispatch the item in data layer 
        dispatch({
            type:"ADD_TO_BASKET",
            item: {
                title:title,
                id:id,
                image:image,
                price:price,
                rating:rating,
            },
        
        });

    }

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>Rs </small>
                    <strong>{price}</strong>
                </p>
            </div>
            <img src={image} className="" alt=""></img>
            <button onClick={addToBasket}>Add to Cart</button>
        </div>
    )
}

export default Product

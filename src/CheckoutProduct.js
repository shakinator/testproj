import React from 'react';
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct({id,image,title,price,rating}) {
    const[{basket},dispatch]= useStateValue();

    const removeFrom = () => {
        //remove the item from the basket
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id
        })
    }
    return (
        <div className='checkoutProduct'>
            <img src={image}  className='checkoutProduct__image' />

            <div className='checkoutProduct__info'>
                <p  className='checkouProduct__title'>{title}</p>
                <p className='checkoutProduct__price'>
                    <small>Rs</small>
                    <strong>{price}</strong>
                </p>
                <button onClick={removeFrom}>Remove Item</button>
            </div>
        </div>
    )
}

export default CheckoutProduct

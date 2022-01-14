import React, { useState } from 'react';
import Header from '../Header/Header';
import MainLeft from '../Main/MainLeft/MainLeft';
import './Cart.css';

import pineaple from "../../assets/fresh/pineaple.webp"
import cart from "../../assets/header/cart.png"
import { getStoredCart,clearTheCart,removeFromDb ,addToDb} from '../../localstorage/localstorage';
import { Link } from 'react-router-dom';

const Cart = () => {

    const LocalSave = getStoredCart();
    const [orders, setOrders] = useState(LocalSave);
    const [isChecked, setIChecked] = useState(true);

    const handleDelete = (id) => {
        console.log(id)
        const newOrder = orders.filter(item => item.id !== id)
        setOrders(newOrder)
        addToDb(newOrder)
    }
    
    let totalQuantity = 0;
    let totalPrice = 0;

    if(Object.keys(orders).length !== 0){
        for (const order of orders){
        totalQuantity = totalQuantity + order.quantity;
        totalPrice = totalPrice + (order.quantity * order.price);
        // console.log('order',order.quantity);
    }
    }
    
    const hanfleCheckbox =(e)=>{
        setIChecked(e.target.checked);
    }

    return (
        <div>
            <Header></Header>
            <div className='main'>
                <MainLeft></MainLeft>
                <div className='main-right'>
                    <div className='right-content cart-wrapper'>
                        <div className="cart">
                            <div className="cart-header">
                                <p className='header-left'>
                                    <input defaultChecked onChange={(e)=> hanfleCheckbox(e) } type="checkbox" />
                                    Fresh
                                </p>
                                <p className='header-middle'>
                                    Products ( {totalQuantity} )
                                </p>
                                <p className='header-right'>
                                    Subtotal: ৳ {totalPrice.toFixed(0)}
                                </p>
                            </div>

                            <div className="cart-content">
                                <div className="cart-left">
                                    <p>
                                        <span>Delivery Time  : </span>  Everyday Delivery 08:00 AM - 11:00 AM.
                                    </p>

                                    <p>
                                        <span>Delivery Charge  : </span>   ৳ 0
                                    </p>

                                    <p>
                                        <span>Items  :  {totalQuantity} </span>
                                    </p>

                                    <p>
                                        <span>Total  :   ৳ {totalPrice.toFixed(0)}</span>
                                    </p>
                                    <p className='payment-type'>Cash & Digital Payment Accepted.</p>
                                </div>
                                <div className="cart-right">
                                    

                                {/* single cart  */}
                                {
                                    orders && orders.map(item => 
                                    <div className="single-cart-item" key={item.id} >
                                        <p className="single-cart-quantity">
                                            <button>+</button>
                                            <span>{item.quantity}</span>
                                            <button>-</button>
                                        </p>
                                        <div className="cart-product-img">
                                            <img src={item.image} alt="" />
                                        </div>
                                        <div className="cart-product-name">
                                            <p className='prod-title'>{item.title}</p>
                                            <p className='prod-subtitle'>
                                                <span className='red-taka'>৳</span> {item.price.toFixed(0)} / each</p>
                                        </div>
                                        <p className='prod-price' >
                                            <span className='red-taka'>৳</span> {(item.price * item.quantity).toFixed(0)} </p>
                                        <p onClick={()=> handleDelete(item.id) } className='prod-delete'>×</p>
                                    </div>)
                                }
                                {/* single cart  end */}
                                    
                                </div>
                            </div>

                                {/* crat footer  */}
                            <div className="cart-footer">
                                <div className="cart-footer-left">
                                    <img src={cart} className="cart-footer-logo" alt="" />
                                    <p className='total-quantity'> {totalQuantity}</p>
                                </div>
                                <p className="total-price">
                                    Total: <span className='footer-taka'>৳</span> {isChecked ? totalPrice.toFixed(2):0}
                                </p>
                                <div className="cart-footer-right">
                                    {isChecked &&  <button className='place-order-btn'>Place Order</button>}
                                    <Link to="/" className='delete-all-order' >×</Link>
                                </div>
                            </div>



                            
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Cart;
import React from 'react';
import Header from '../Header/Header';
import MainLeft from '../Main/MainLeft/MainLeft';
import './Cart.css';

import pineaple from "../../assets/fresh/pineaple.webp"
import cart from "../../assets/header/cart.png"

const Cart = () => {
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
                                    <input type="checkbox" />
                                    Fresh
                                </p>
                                <p className='header-middle'>
                                    Products ( 2 )
                                </p>
                                <p className='header-right'>
                                    Subtotal: ৳ 77
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
                                        <span>Items  :   2</span>
                                    </p>

                                    <p>
                                        <span>Total  :   ৳ 77</span>
                                    </p>
                                    <p className='payment-type'>Cash & Digital Payment Accepted.</p>
                                </div>
                                <div className="cart-right">
                                    

                                {/* single cart  */}
                                    <div className="single-cart-item">
                                        <p className="single-cart-quantity">
                                            <button>+</button>
                                            <span>1</span>
                                            <button>-</button>
                                        </p>
                                        <div className="cart-product-img">
                                            <img src={pineaple} alt="" />
                                        </div>
                                        <div className="cart-product-name">
                                            <p className='prod-title'>Pineapple Medium</p>
                                            <p className='prod-subtitle'>
                                                <span className='red-taka'>৳</span> 45 / each</p>
                                        </div>
                                        <p className='prod-price' >
                                            <span className='red-taka'>৳</span> 45</p>
                                        <p className='prod-delete'>×</p>
                                    </div>

                                    {/* single cart  */}
                                    <div className="single-cart-item">
                                        <p className="single-cart-quantity">
                                            <button>+</button>
                                            <span>1</span>
                                            <button>-</button>
                                        </p>
                                        <div className="cart-product-img">
                                            <img src={pineaple} alt="" />
                                        </div>
                                        <div className="cart-product-name">
                                            <p className='prod-title'>Pineapple Medium</p>
                                            <p className='prod-subtitle'>
                                                <span className='red-taka'>৳</span> 45 / each</p>
                                        </div>
                                        <p className='prod-price' >
                                            <span className='red-taka'>৳</span> 45</p>
                                        <p className='prod-delete'>×</p>
                                    </div>

                                    
                                    
                                    
                                    
                                </div>
                            </div>

                            <div className="cart-footer">
                                <div className="cart-footer-left">
                                    <img src={cart} className="cart-footer-logo" alt="" />
                                    <p className='total-quantity'>2 Items</p>
                                </div>
                                <p className="total-price">
                                    Total: <span className='footer-taka'>৳</span> 187
                                </p>
                                <div className="cart-footer-right">
                                    <button className='place-order-btn'>Place Order</button>
                                    <p className='delete-all-order' >×</p>
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
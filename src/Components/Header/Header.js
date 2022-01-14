import React from 'react';
import "./Header.css";
import logo from "../../assets/header/logo.png";
import search from "../../assets/header/search.png";
import location from "../../assets/header/location.png";
import user from "../../assets/header/user.png";
import cartIcon from "../../assets/header/cart.png";
import leftArrow from "../../assets/header/leftArrow.png";
import artBoard from "../../assets/header/artBoard.png";
import { Routes, Route, Link } from "react-router-dom";
import { getStoredCart } from '../../localstorage/localstorage';

const Header = ({ cart }) => {

     // console.log(cart)
    let totalQuantity = 0;
    let total = 0;

    const LocalSave = getStoredCart();
    console.log('cart',cart,'LocalSave',LocalSave);

    if (LocalSave.length) {
        for (const product of LocalSave) {
            if (!product.quantity) {
                product.quantity = 1;
            }
            total = total + (product.price * product.quantity);
            totalQuantity = totalQuantity + product.quantity;
        }
    }


    return (
        <div className='header'>
            {/* <!-- header left  --> */}
        <div className="header-left">
            <Link to="/">
                <img className="header-logo" src={logo} alt="" />
            </Link>
        </div>
        
        
        {/* <!-- header right  --> */}
        <div className="header-right">
        
            {/* <!-- search  --> */}
            <div className="search">
                <img src={search} alt="" />
            </div>
        
            {/* <!-- location  --> */}
            <div className="location">
                <img src={location} alt="" />
                <p>Select Delivery Location</p>
            </div>
        
            {/* <!-- sign in  --> */}
            <div className="sign-in">
                <img src={user} alt="" />
                <p>Sign In</p>
            </div>
        
            {/* <!-- cart-icon  --> */}
            <div className="cart-icon">
                <img src={cartIcon} alt="" />
            </div>
        
            
        
            {/* <!-- cart values  --> */}
            <Link to="/cart">
            <div className="cart-values">
        
                {/* <!-- cart arrow  --> */}
                <div className="arrow">
                    <img src={leftArrow} alt="" />
                </div>
        
                {/* <!-- carts item quantity  --> */}
                <p className="cart-quantity">
                    <img src={artBoard} alt="" />
                    {totalQuantity}
                    {/* 0 */}
                </p>
        
                {/* <!-- carts item price  --> */}
                <p className="cart-price">
                    <span className="taka">৳ </span>
                     {total.toFixed(0)}
                    
                </p>
        
            </div></Link>
        </div>
        </div>
    );
};

export default Header;
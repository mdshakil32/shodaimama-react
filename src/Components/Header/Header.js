import React from 'react';
import "./Header.css";
import logo from "../../assets/header/logo.png";
import search from "../../assets/header/search.png";
import location from "../../assets/header/location.png";
import user from "../../assets/header/user.png";
import cart from "../../assets/header/cart.png";
import leftArrow from "../../assets/header/leftArrow.png";
import artBoard from "../../assets/header/artBoard.png";


const Header = () => {
    return (
        <div className='header'>
            {/* <!-- header left  --> */}
        <div className="header-left">
            <a href="text.html">
                <img className="header-logo" src={logo} alt="" />
            </a>
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
                <img src={cart} alt="" />
            </div>
        
           
        
            {/* <!-- cart values  --> */}
            <div className="cart-values">
        
                {/* <!-- cart arrow  --> */}
                <div className="arrow">
                    <img src={leftArrow} alt="" />
                </div>
        
                {/* <!-- carts item quantity  --> */}
                <p className="cart-quantity">
                    <img src={artBoard} alt="" />
                    0
                </p>
        
                {/* <!-- carts item price  --> */}
                <p className="cart-price">
                    <span className="taka">৳ </span>
                    0
                </p>
        
            </div>
        </div>
        </div>
    );
};

export default Header;
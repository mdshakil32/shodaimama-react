import React, { useEffect, useState } from 'react';
import "./Fresh.css";

import bike from "../../../../../assets/common/bike.png";
import card from "../../../../../assets/common/card.png";
import taka from "../../../../../assets/common/taka.png";
import pineaple from "../../../../../assets/fresh/pineaple.webp";
import banana from "../../../../../assets/fresh/banana.webp";
import gourd from "../../../../../assets/fresh/gourd.png";
import brinjal from "../../../../../assets/fresh/brinjal.webp";
import tomato from "../../../../../assets/fresh/tomato.webp";
import pumpkin from "../../../../../assets/fresh/pumpkin.webp";
import roasrchicken from "../../../../../assets/fresh/roasr-chicken.jpeg";
import skinnoffchicken from "../../../../../assets/fresh/skinn-off-chicken.webp";


const Fresh = () => {

    const [products,setProducts] = useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(data => data.json())
        .then(res => setProducts(res))
    },[] );

    console.log(products);

    return (
        <div className="fresh">

                    {/* <!-- fresh header  --> */}
                    <div className="common-header preorder-header">
                        <div className="common-green-border"></div>
                        <p className="common-header-title">Fresh</p>
                        <p className="common-header-subtitle">গুনগত মান বজায় রাখার জন্য পচনশীল খাদ্যপণ্য সরবরাহ করা হয় সকাল ৮-১১ টা পর্যন্ত ।</p>
                    </div>

                    {/* <!-- fresh items  --> */}
                    <div className="commom-card-items fresh-items">

                        {/* <!-- fresh single cart start  --> */}
                        
                        {
                            products.map(product => 
                            <div key={product.id} className="common-single-product-cart fresh-single-item">
                            <div className="cart-top-tag">
                                Fresh
                            </div>
                            <div className="cart-image">
                                <img src={product.image} alt=""/>
                            </div>
                            <div className="cart-name-price-area">
                                <p className="product-name">{product.title.slice(0,25) } </p>
                                <p className="product-subtext">{product.category} </p>
                                <p className="product-price">৳ 
                                    <span className="product-price-value">{product.price}</span>
                                </p>
                            </div>
                            <div className="product-detail-btn">
                                <button>Details</button>
                            </div>
                            <div className="product-delivery-status">
                                <div className="delivery-status-left">
                                    <img src={bike} alt=""/>
                                    <span>Next Morning</span>
                                </div>
                                <div className="delivery-status-right">
                                    <img className="credit-card" src={card} alt=""/>
                                    <img className="taka" src={taka} alt=""/>  
                                </div>
                            </div>
                            <div className="add-to-cart-btn">
                                <button>Add To Cart</button>
                            </div>
                        </div>)
                        }

                        {/* <!-- fresh single cart end  --> */}

                    </div>

                    <div className="common-show-more-btn">
                        <button>Show More</button>
                    </div>
                </div>
    );
};

export default Fresh;
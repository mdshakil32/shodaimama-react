import React from 'react';
import "./Regular.css";

import card from "../../../../../assets/common/card.png";
import taka from "../../../../../assets/common/taka.png";
import bike from "../../../../../assets/common/bike.png";
import miniket from "../../../../../assets/regular/miniket-rice.jpg";
import egg from "../../../../../assets/regular/egg.jpg";
import noodles from "../../../../../assets/regular/noodles.jpg";
import rupchada from "../../../../../assets/regular/rupchada.jpg";
import oats from "../../../../../assets/regular/oats.jpg";
import coffe from "../../../../../assets/regular/coffe.webp";
import horlicks from "../../../../../assets/regular/horlicks.jpg";
import nuttela from "../../../../../assets/regular/nuttela.jpg";


const Regular = () => {
    return (
        <div className="regular">
                
                    {/* <!-- regular header  --> */}
                    <div className="common-header preorder-header">
                        <div className="common-green-border"></div>
                        <p className="common-header-title">Regular</p>
                        <p className="common-header-subtitle">২ ঘন্টার মধ্যে জরুরি প্রয়োজনীয় পণ্যসমূহ সরবরাহ করা হয় সকাল ১০টা-রাত ১০টা পর্যন্ত ।</p>
                    </div>
                
                    {/* <!-- regular items  --> */}
                    <div className="commom-card-items ">
                
                        {/* <!--regular single cart start  --> */}
                        <div className="common-single-product-cart ">
                            <div className="cart-top-tag bg-blue ">
                                Regular
                            </div>
                            <div className="cart-image">
                                <img src={miniket} alt=""/>
                            </div>
                            <div className="cart-name-price-area">
                                <p className="product-name">Miniket Rice Premium</p>
                                <p className="product-subtext">5 kg</p>
                                <p className="product-price">৳
                                    <span className="product-price-value">350</span>
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
                        </div>
                        {/* <!--regular single cart end  --> */}


                        {/* <!--regular single cart start  --> */}
                        <div className="common-single-product-cart ">
                            <div className="cart-top-tag bg-blue ">
                                Regular
                            </div>
                            <div className="cart-image">
                                <img src={egg} alt=""/>
                            </div>
                            <div className="cart-name-price-area">
                                <p className="product-name">Chicken Eggs (Layer)</p>
                                <p className="product-subtext">12 pcs</p>
                                <p className="product-price">৳
                                    <span className="product-price-value">115</span>
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
                        </div>
                        {/* <!--regular single cart end  --> */}


                        {/* <!--regular single cart start  --> */}
                        <div className="common-single-product-cart ">
                            <div className="cart-top-tag bg-blue ">
                                Regular
                            </div>
                            <div className="cart-image">
                                <img src={noodles} alt=""/>
                            </div>
                            <div className="cart-name-price-area">
                                <p className="product-name">Chopstick Masala Noodles</p>
                                <p className="product-subtext">8 pack</p>
                                <p className="product-price">৳
                                    <span className="product-price-value">140</span>
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
                        </div>
                        {/* <!--regular single cart end  --> */}


                        {/* <!--regular single cart start  --> */}
                        <div className="common-single-product-cart ">
                            <div className="cart-top-tag bg-blue ">
                                Regular
                            </div>
                            <div className="cart-image">
                                <img src={rupchada} alt=""/>
                            </div>
                            <div className="cart-name-price-area">
                                <p className="product-name">Rupchanda Soyabean oil</p>
                                <p className="product-subtext">5 ltr</p>
                                <p className="product-price">৳
                                    <span className="product-price-value">760</span>
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
                        </div>
                        {/* <!--regular single cart end  --> */}


                        {/* <!--regular single cart start  --> */}
                        <div className="common-single-product-cart ">
                            <div className="cart-top-tag bg-blue ">
                                Regular
                            </div>
                            <div className="cart-image">
                                <img src={oats} alt=""/>
                            </div>
                            <div className="cart-name-price-area">
                                <p className="product-name">Quaker Oats Poly</p>
                                <p className="product-subtext">450 gm</p>
                                <p className="product-price">৳
                                    <span className="product-price-value">265</span>
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
                        </div>
                        {/* <!--regular single cart end  --> */}


                        {/* <!--regular single cart start  --> */}
                        <div className="common-single-product-cart ">
                            <div className="cart-top-tag bg-blue ">
                                Regular
                            </div>
                            <div className="cart-image">
                                <img src={coffe} alt=""/>
                            </div>
                            <div className="cart-name-price-area">
                                <p className="product-name">Bru Pure Instant Coffee Jar</p>
                                <p className="product-subtext">100 gm</p>
                                <p className="product-price">৳
                                    <span className="product-price-value">449</span>
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
                        </div>
                        {/* <!--regular single cart end  --> */}


                        {/* <!--regular single cart start  --> */}
                        <div className="common-single-product-cart ">
                            <div className="cart-top-tag bg-blue ">
                                Regular
                            </div>
                            <div className="cart-image">
                                <img src={horlicks} alt=""/>
                            </div>
                            <div className="cart-name-price-area">
                                <p className="product-name">Horlicks Health And Nutrition Drink Jar</p>
                                <p className="product-subtext">500 gm</p>
                                <p className="product-price">৳
                                    <span className="product-price-value">350</span>
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
                        </div>
                        {/* <!-- single cart end  --> */}


                        {/* <!--regular single cart start  --> */}
                        <div className="common-single-product-cart ">
                            <div className="cart-top-tag bg-blue ">
                                Regular
                            </div>
                            <div className="cart-image">
                                <img src={nuttela} alt=""/>
                            </div>
                            <div className="cart-name-price-area">
                                <p className="product-name">Nutella Hazelnut Cocoa Spread</p>
                                <p className="product-subtext">350 gm</p>
                                <p className="product-price">৳
                                    <span className="product-price-value">520</span>
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
                        </div>
                        {/* <!-- regular single cart end  --> */}
                
                
                
                    </div>
                
                    <div className="common-show-more-btn">
                        <button>Show More</button>
                    </div>
                </div>
    );
};

export default Regular;
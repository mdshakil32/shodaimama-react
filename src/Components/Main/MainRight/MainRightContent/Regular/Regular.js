import React, { useEffect, useState } from 'react';
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
import { addToDb, getStoredCart } from '../../../../../localstorage/localstorage';


const Regular = ({cart,setCart}) => {
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(data => data.json())
        .then(res => setProducts(res))
    },[] );

    const LocalSave = getStoredCart();

    const clickAddToCart = (data) => {
        // console.log(cart);
        handleAddToCart(data)
    }
    
    console.log('cart',cart);
    if(LocalSave){
        console.log('LocalSave',LocalSave);
    }
    if(!LocalSave){
        console.log('LocalSave nai',LocalSave);
    }
    
    
    const handleAddToCart = (product) => {
        const exists = cart?.find(pd => pd.id === product.id);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(pd => pd.id !== product.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, product];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }

        setCart(newCart);
        addToDb(newCart);

    }


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

                        {/* single regular item start */}
                        {
                            products.map(product => 
                            <div key={product.id} className="common-single-product-cart fresh-single-item">
                            <div className="cart-top-tag bg-blue">
                                Regular
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
                                <button onClick={() => clickAddToCart(product)} >Add To Cart</button>
                            </div>
                        </div>)
                        }
                        {/* single regular item end */}
                
                
                
                    </div>
                
                    <div className="common-show-more-btn">
                        <button>Show More</button>
                    </div>
                </div>
    );
};

export default Regular;
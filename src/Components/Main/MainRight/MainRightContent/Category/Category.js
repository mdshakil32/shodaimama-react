import React from 'react';
import "./Category.css";
import breakfast from "../../../../../assets/categories/breakfast.png";
import cooking from "../../../../../assets/categories/cooking.png";
import meat from "../../../../../assets/categories/meat.png";
import fruits from "../../../../../assets/categories/fruits.png";
import dairy from "../../../../../assets/categories/dairy.png";
import frozen from "../../../../../assets/categories/frozen.png";
import beverage from "../../../../../assets/categories/beverage.png";
import kids from "../../../../../assets/categories/kids.png";
import personal from "../../../../../assets/categories/personal.png";
import kitchen from "../../../../../assets/categories/kitchen.png";
import stationary from "../../../../../assets/categories/stationary.png";


const Category = () => {
    return (
        <div className="shodaimama-category">
                    <div className="common-header-2">
                        <h1>Shodaimama Categories</h1>
                    </div>
                    <div className="shodai-category-carts">

                        {/* <!-- single-category-cart  --> */}
                        <div className="single-category-cart">
                            <a href="#">
                                <div className="category-cart-img">
                                    <img src={breakfast} alt=""/>
                                </div>
                                <p className="category-name">Breakfast & Snacks</p>
                            </a>
                        </div>
                        {/* <!-- single-category-cart  --> */}
                        <div className="single-category-cart">
                            <a href="#">
                                <div className="category-cart-img">
                                    <img src={cooking} alt=""/>
                                </div>
                                <p className="category-name">Cooking</p>
                            </a>
                        </div>
                        {/* <!-- single-category-cart  --> */}
                        <div className="single-category-cart">
                            <a href="#">
                                <div className="category-cart-img">
                                    <img src={meat} alt=""/>
                                </div>
                                <p className="category-name">Meat & Fish</p>
                            </a>
                        </div>
                        {/* <!-- single-category-cart  --> */}
                        <div className="single-category-cart">
                            <a href="#">
                                <div className="category-cart-img">
                                    <img src={fruits} alt=""/>
                                </div>
                                <p className="category-name">Fruits & Vegetables</p>
                            </a>
                        </div>
                        {/* <!-- single-category-cart  --> */}
                        <div className="single-category-cart">
                            <a href="#">
                                <div className="category-cart-img">
                                    <img src={dairy} alt=""/>
                                </div>
                                <p className="category-name">Dairy</p>
                            </a>
                        </div>
                        {/* <!-- single-category-cart  --> */}
                        <div className="single-category-cart">
                            <a href="#">
                                <div className="category-cart-img">
                                    <img src={frozen} alt=""/>
                                </div>
                                <p className="category-name">Frozen & Canned</p>
                            </a>
                        </div>
                        {/* <!-- single-category-cart  --> */}
                        <div className="single-category-cart">
                            <a href="#">
                                <div className="category-cart-img">
                                    <img src={beverage} alt=""/>
                                </div>
                                <p className="category-name">Beverages</p>
                            </a>
                        </div>
                        {/* <!-- single-category-cart  --> */}
                        <div className="single-category-cart">
                            <a href="#">
                                <div className="category-cart-img">
                                    <img src={kids} alt=""/>
                                </div>
                                <p className="category-name">Kids care</p>
                            </a>
                        </div>
                        {/* <!-- single-category-cart  --> */}
                        <div className="single-category-cart">
                            <a href="#">
                                <div className="category-cart-img">
                                    <img src={personal} alt=""/>
                                </div>
                                <p className="category-name">Personal Care</p>
                            </a>
                        </div>
                        {/* <!-- single-category-cart  --> */}
                        <div className="single-category-cart">
                            <a href="#">
                                <div className="category-cart-img">
                                    <img src={kitchen} alt=""/>
                                </div>
                                <p className="category-name">Home & Kitchen</p>
                            </a>
                        </div>
                        {/* <!-- single-category-cart  --> */}
                        <div className="single-category-cart">
                            <a href="#">
                                <div className="category-cart-img">
                                    <img src={stationary} alt=""/>
                                </div>
                                <p className="category-name">Stationary</p>
                            </a>
                        </div>
                    </div>
                </div>
    );
};

export default Category;
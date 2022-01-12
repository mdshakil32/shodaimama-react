import React from 'react';
import "./MainLeft.css";
import home from "../../../assets/sidebar/home.png"
import fresh from "../../../assets/sidebar/fresh.png"
import regular from "../../../assets/sidebar/regular.png"
import preorder from "../../../assets/sidebar/preorder.png"
import hygine from "../../../assets/sidebar/hygine.png"
import breakfast from "../../../assets/sidebar/breakfast.png"
import cooking from "../../../assets/sidebar/cooking.png"
import meat from "../../../assets/sidebar/meat.png"
import fruits from "../../../assets/sidebar/fruits.png"
import dairy from "../../../assets/sidebar/dairy.png"
import frozen from "../../../assets/sidebar/frozen.png"
import beverage from "../../../assets/sidebar/beverage.png"
import kids from "../../../assets/sidebar/kids.png"
import personal from "../../../assets/sidebar/personal.png"
import kitchen from "../../../assets/sidebar/kitchen.png"
import stationary from "../../../assets/sidebar/stationary.png"

const MainLeft = () => {
    return (
        <div className='main-left'>
             <div className="main-sidebar">
                {/* <!-- sidebar top  --> */}
                <ul className="sidebar-top">
                
                    {/* <!-- sidebar-single-item  --> */}
                    <li className="sidebar-single-item">
                        <a className="side-bar-link" href="#">
                            <img src={home} alt="" />
                            Home
                        </a>
                    </li>
                    {/* <!-- sidebar-single-item  --> */}
                    <li className="sidebar-single-item">
                        <a className="side-bar-link" href="#">
                            <img src={fresh} alt="" />
                            Fresh
                        </a>
                    </li>
                    {/* <!-- sidebar-single-item  --> */}
                    <li className="sidebar-single-item">
                        <a className="side-bar-link" href="#">
                            <img src={regular} alt="" />
                            Regular
                        </a>
                    </li>
                    {/* <!-- sidebar-single-item  --> */}
                    <li className="sidebar-single-item">
                        <a className="side-bar-link" href="#">
                            <img src={preorder} alt=""/>
                            Preorder
                        </a>
                    </li>
                </ul>

                {/* <!-- sidebar middle explore  --> */}
                <div className="sidebar-explore">
                    <a className="color-gray" href="#">Explore <span className="color-green ">Shodai</span><span
                            className="color-orange">Mama</span> </a>
                </div>

                {/* <!-- sidebar bottom  --> */}
                <ul className="sidebar-bottom">
                
                    {/* <!-- sidebar-single-item  --> */}
                    <li className="sidebar-single-item">
                        <a className="side-bar-link" href="#">
                            <img src={hygine} alt=""/>
                            Hygiene
                        </a>
                    </li>
                    {/* <!-- sidebar-single-item  --> */}
                    <li className="sidebar-single-item">
                        <a className="side-bar-link" href="#">
                            <img src={breakfast} alt=""/>
                            Breakfast & Snacks
                        </a>
                    </li>
                    {/* <!-- sidebar-single-item  --> */}
                    <li className="sidebar-single-item">
                        <a className="side-bar-link" href="#">
                            <img src={cooking} alt=""/>
                            Cooking
                        </a>
                    </li>
                    {/* <!-- sidebar-single-item  --> */}
                    <li className="sidebar-single-item">
                        <a className="side-bar-link" href="#">
                            <img src={meat} alt=""/>
                            Meat & Fish
                        </a>
                    </li>
                    {/* <!-- sidebar-single-item  --> */}
                    <li className="sidebar-single-item">
                        <a className="side-bar-link" href="#">
                            <img src={fruits} alt=""/>
                            Fruits & Vegetables
                        </a>
                    </li>
                    {/* <!-- sidebar-single-item  --> */}
                    <li className="sidebar-single-item">
                        <a className="side-bar-link" href="#">
                            <img src={dairy} alt=""/>
                            Dairy
                        </a>
                    </li>
                    {/* <!-- sidebar-single-item  --> */}
                    <li className="sidebar-single-item">
                        <a className="side-bar-link" href="#">
                            <img src={frozen} alt=""/>
                            Frozen & Canned
                        </a>
                    </li>
                    {/* <!-- sidebar-single-item  --> */}
                    <li className="sidebar-single-item">
                        <a className="side-bar-link" href="#">
                            <img src={beverage} alt=""/>
                            Beverages
                        </a>
                    </li>
                    {/* <!-- sidebar-single-item  --> */}
                    <li className="sidebar-single-item">
                        <a className="side-bar-link" href="#">
                            <img src={kids} alt=""/>
                            Kids care
                        </a>
                    </li>
                    {/* <!-- sidebar-single-item  --> */}
                    <li className="sidebar-single-item">
                        <a className="side-bar-link" href="#">
                            <img src={personal} alt=""/>
                            Personal Care
                        </a>
                    </li>
                    {/* <!-- sidebar-single-item  --> */}
                    <li className="sidebar-single-item">
                        <a className="side-bar-link" href="#">
                            <img src={kitchen} alt=""/>
                            Home & Kitchen
                        </a>
                    </li>
                    {/* <!-- sidebar-single-item  --> */}
                    <li className="sidebar-single-item">
                        <a className="side-bar-link" href="#">
                            <img src={stationary} alt=""/>
                            Stationary
                        </a>
                    </li>
                
                </ul>
            </div>
            
        </div>
    );
};

export default MainLeft;
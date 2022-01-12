import React from 'react';
import "./MainRightNav.css";
const MainRightNav = () => {
    return (
        <div className='right-inner-nav-wrapper'>
            <ul className="right-inner-nav">
                    <li className="inner-nav-item">
                        <a href="#">Fresh</a>
                    </li>
                    <li className="inner-nav-item">
                        <a href="#">Regular</a>
                    </li>
                    <li className="inner-nav-item">
                        <a href="#">Preorder</a>
                    </li>
                </ul>
        </div>
    );
};

export default MainRightNav;
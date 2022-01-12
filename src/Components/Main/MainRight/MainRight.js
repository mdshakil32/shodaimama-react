import React from 'react';
import "./MainRight.css";

import Footer from './Footer/Footer';
import MainRightContent from './MainRightContent/MainRightContent';
import MainRightNav from './MainRightNav/MainRightNav';

const MainRight = () => {
    return (
        <div className='main-right'>
            <MainRightNav></MainRightNav>
            <MainRightContent></MainRightContent>
            <Footer></Footer>

        </div>
    );
};

export default MainRight;
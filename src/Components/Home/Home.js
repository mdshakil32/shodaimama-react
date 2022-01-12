import React from 'react';
import "./Home.css";

import Header from '../Header/Header';
import MainLeft from '../Main/MainLeft/MainLeft';
import Footer from '../Main/MainRight/Footer/Footer';
import MainRightNav from '../Main/MainRight/MainRightNav/MainRightNav';
import Slider from '../Main/MainRight/MainRightContent/Slider/Slider';
import PreOrder from '../Main/MainRight/MainRightContent/PreOrder/PreOrder';
import Fresh from '../Main/MainRight/MainRightContent/Fresh/Fresh';
import Regular from '../Main/MainRight/MainRightContent/Regular/Regular';
import Category from '../Main/MainRight/MainRightContent/Category/Category';
import WhyShodaiMama from '../Main/MainRight/MainRightContent/WhyShodaiMama/WhyShodaiMama';

const Home = () => {
    return (
        <>
            <Header></Header>
            {/* <Main></Main> */}

            <div className='main'>
                <MainLeft></MainLeft>
                <div className='main-right'>
                    <MainRightNav></MainRightNav>

                    <div className='right-content'>
                        <Slider></Slider>
                        <PreOrder></PreOrder>
                        <Fresh></Fresh>
                        <Regular></Regular>
                        <Category></Category>
                        <WhyShodaiMama></WhyShodaiMama>
                    </div>

                    <Footer></Footer>
                </div>
            </div>
        </>
    );
};

export default Home;
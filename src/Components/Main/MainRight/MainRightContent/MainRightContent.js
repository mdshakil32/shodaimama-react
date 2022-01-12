import React from 'react';
import "./MainRightContent.css";

import Category from './Category/Category';
import Fresh from './Fresh/Fresh';
import PreOrder from './PreOrder/PreOrder';
import Regular from './Regular/Regular';
import Slider from './Slider/Slider';
import WhyShodaiMama from './WhyShodaiMama/WhyShodaiMama';

const MainRightContent = () => {
    return (
        <div className='right-content'>
            <Slider></Slider>
            <PreOrder></PreOrder>
            <Fresh></Fresh>
            <Regular></Regular>
            <Category></Category>
            <WhyShodaiMama></WhyShodaiMama>
        </div>
    );
};

export default MainRightContent;
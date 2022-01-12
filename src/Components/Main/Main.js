import React from 'react';
import "./Main.css";
import MainLeft from './MainLeft/MainLeft';
import MainRight from './MainRight/MainRight';

const Main = () => {
    return (
        <div className='main'>
            <MainLeft></MainLeft>
            <MainRight></MainRight>
        </div>
    );
};

export default Main;
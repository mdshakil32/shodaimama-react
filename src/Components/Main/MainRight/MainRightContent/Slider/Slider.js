import React from 'react';
import "./Slider.css";
import slider1 from "../../../../../assets/banner/slider1.png";
import slider2 from "../../../../../assets/banner/slider2.jpeg";
import slider3 from "../../../../../assets/banner/slider3.png";
import slider4 from "../../../../../assets/banner/slider4.png";

const Slider = () => {
    return (
        <div id='slider'>
            <figure>
                <img src={slider1} alt=""/>
                <img src={slider2} alt=""/>
                <img src={slider3} alt=""/>
                <img src={slider4} alt=""/>
                <img src={slider1} alt=""/>
            </figure>
        </div>
    );
};

export default Slider;
import React from 'react';
import "./PreOrder.css";
import preorder from "../../../../../assets/preorder/preorder.jpeg";
import arrow from "../../../../../assets/preorder/arrow.png";

const PreOrder = () => {
    return (
         <div className="preorder">
                    <div className="common-header preorder-header">
                        <div className="common-green-border"></div>
                        <p className="common-header-title">Preorder</p>
                        <p className="common-header-subtitle">বাজার দরের চেয়ে কম মূল্যে মৌসুমি পণ্য, ঐতিহ্যবাহী খাবার এবং মাসের বাজার সরবরাহ করা হয় ২-৭ দিনে ।</p>
                    </div>

                    <div className="preorder-card">
                        <a href="#">
                            <div className="preorder-card-img">
                                <img src={preorder} alt=""/>
                            </div>
                            <div className="preorder-card-text">
                                <p>সদাইমামা বার-বি-কিউ ফেস্ট ...</p>
                                <img src={arrow} alt=""/>
                            </div>
                        </a>
                    </div>

                </div>
    );
};

export default PreOrder;
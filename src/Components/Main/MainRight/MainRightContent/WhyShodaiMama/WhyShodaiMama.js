import React from 'react';
import "./WhyShodaiMama.css";

import haselfree from "../../../../../assets/whyshodaimama/haselfree.png";
import freshness from "../../../../../assets/whyshodaimama/freshness.png";
import delivery from "../../../../../assets/whyshodaimama/delivery.png";
import payment from "../../../../../assets/whyshodaimama/payment.png";
import customer from "../../../../../assets/whyshodaimama/customer.png";
import money from "../../../../../assets/whyshodaimama/money.png";
import resolve from "../../../../../assets/whyshodaimama/resolve.png";
import refund from "../../../../../assets/whyshodaimama/refund.png";

const WhyShodaiMama = () => {
    return (
        <div className="why-shodaimama">

                    {/* <!-- why-shodaimama header  --> */}
                    <div className="common-header-2 shodai-category-header">
                        <h1>Why Shodaimama</h1>
                    </div>

                    <div className="shodaimama-services">

                        {/* <!-- single service  --> */}
                        <div className="single-service">
                            <div className="single-service-img">
                                <img src={haselfree} alt=""/>
                            </div>

                            <h1 className="single-service-title">Hassle Free Grocery Shopping</h1>

                            <p className="single-service-subtitle">Avoid the crowds and long queues to get your daily needs.</p>
                        </div>
                        {/* <!-- single service  --> */}

                        <div className="single-service">
                            <div className="single-service-img">
                                <img src={freshness} alt=""/>
                            </div>

                            <h1 className="single-service-title">Freshness Redefined</h1>

                            <p className="single-service-subtitle">Fresh groceries from trusted and hygienic sources to your doorstep.</p>
                        </div>

                        {/* <!-- single service  --> */}
                        <div className="single-service">
                            <div className="single-service-img">
                                <img src={delivery} alt=""/>
                            </div>

                            <h1 className="single-service-title">On-Time Doorstep Delivery</h1>

                            <p className="single-service-subtitle">Solution to your needs just on time.</p>
                        </div>

                        {/* <!-- single service  --> */}
                        <div className="single-service">
                            <div className="single-service-img">
                                <img src={payment} alt=""/>
                            </div>

                            <h1 className="single-service-title">Fast & Flawless Payment System</h1>

                            <p className="single-service-subtitle">All secured payment gateways to ensure stress free fast payment.</p>
                        </div>


                        {/* <!-- single service  --> */}
                        <div className="single-service">
                            <div className="single-service-img">
                                <img src={customer} alt=""/>
                            </div>

                            <h1 className="single-service-title">Customer Centric Approach</h1>

                            <p className="single-service-subtitle">For us, our customer needs comes first. Our Aim is to offer the very Best quality, at the best price and deals.</p>
                        </div>


                        {/* <!-- single service  --> */}
                        <div className="single-service">
                            <div className="single-service-img">
                                <img src={money} alt=""/>
                            </div>

                            <h1 className="single-service-title">Value For Money</h1>

                            <p className="single-service-subtitle">Commited to ensure that your hard-earned money are spent wisely.</p>
                        </div>
                        {/* <!-- single service  --> */}
                        <div className="single-service">
                            <div className="single-service-img">
                                <img src={resolve} alt=""/>
                            </div>

                            <h1 className="single-service-title">Prompt Query Resolve</h1>

                            <p className="single-service-subtitle">Not just answering your calls, rather a substantial solution to all your queries.</p>
                        </div>
                        {/* <!-- single service  --> */}
                        <div className="single-service">
                            <div className="single-service-img">
                                <img src={refund} alt=""/>
                            </div>

                            <h1 className="single-service-title">Stress Free Refund/Return Policy</h1>

                            <p className="single-service-subtitle">With proper validation your return and refund will be as smooth as your shopping experience with us.</p>
                        </div>
                    </div>
                </div>
    );
};

export default WhyShodaiMama;
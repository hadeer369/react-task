import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import service1 from '../icon/service1.png'
import service2 from '../icon/service2.png'
import service3 from '../icon/service3.png'
import service4 from '../icon/service4.png'
import service5 from '../icon/service5.png'
import service6 from '../icon/service6.png'


const Service = (props) => {

    return (
        <>

            <div className="service">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div className="title">
                                <h2>Service <strong className="black">Process</strong></h2>
                                <span>Easy and effective way to get your device repair</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div className="service-box">
                                <i><img src={service1} /></i>
                                <h3>Fast service</h3>
                                <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div className="service-box">
                                <i><img src={service2} /></i>
                                <h3>Secure payments</h3>
                                <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div className="service-box">
                                <i><img src={service3} /></i>
                                <h3>Expert team</h3>
                                <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div className="service-box">
                                <i><img src={service4} /></i>
                                <h3>Affordable services</h3>
                                <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div className="service-box">
                                <i><img src={service5} /></i>
                                <h3>90 Days warranty</h3>
                                <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div className="service-box">
                                <i><img src={service6} /></i>
                                <h3>Award winning</h3>
                                <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Service;

import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import i1 from '../icon/1.png'
import i2 from '../icon/2.png'
import i3 from '../icon/3.png'

import i4 from '../icon/4.png'
const WhyChooce = (props) => {

    return (
        <>

            <div className="whyschose">
                <div className="container">

                    <div className="row">
                        <div className="col-md-7 offset-md-3">
                            <div className="title">
                                <h2>Why <strong className="black">choose us</strong></h2>
                                <span>Fastest repair service with best price!</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="choose_bg">
                <div className="container">
                    <div className="white_bg">
                        <div className="row">
                            <dir className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div className="for_box">
                                    <i><img src={i1} /></i>
                                    <h3>Data recovery</h3>
                                    <p>Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
                                </div>
                            </dir>
                            <dir className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div className="for_box">
                                    <i><img src={i2} /></i>
                                    <h3>Computer repair</h3>
                                    <p>Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
                                </div>
                            </dir>
                            <dir className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div className="for_box">
                                    <i><img src={i3} /></i>
                                    <h3>Mobile service</h3>
                                    <p>Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
                                </div>
                            </dir>
                            <dir className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div className="for_box">
                                    <i><img src={i4} /></i>
                                    <h3>Network solutions</h3>
                                    <p>Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
                                </div>
                            </dir>
                            <div className="col-md-12">
                                <a className="read-more">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default WhyChooce;

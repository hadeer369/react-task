import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import callll from '../icon/calll.png'
import map from '../images/mapimg.jpg'
import service2 from '../icon/service2.png'
import service3 from '../icon/service3.png'
import service4 from '../icon/service4.png'
import service5 from '../icon/service5.png'
import service6 from '../icon/service6.png'


const Clients = (props) => {

    return (
        <>
            <div className="product-bg">
                <div className="container">
                    <div className="yellow_bg">
                        <div className="row">
                            <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                                <div className="yellow-box">
                                    <h3>REQUEST A FREE QUOTE<i><img src={callll} /></i></h3>

                                    <p>Get answers and advice from people you want it from.</p>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                                <div className="yellow-box">
                                    <a href="#">Get  Quote</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div className="container-fluid padi">
                <div className="map">
                    <img src={map} alt="img" />
                </div>
            </div>
        </>
    );
}
export default Clients;

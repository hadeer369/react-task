import React from 'react';
import { Link, NavLink } from 'react-router-dom'
const Slider = (props) => {

    return (
        <>

            <section className="slider_section">
                <div id="main_slider" className="carousel slide banner-main" data-ride="carousel">

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="first-slide" src="images/banner2.jpg" alt="First slide" />
                            <div className="container">
                                <div className="carousel-caption relative">
                                    <h1>Our <br> <strong className="black_bold">Latest </strong><br>
                                        <strong className="yellow_bold">Product </strong></h1>
                                        <p>It is a long established fact that a r <br>
                                            eader will be distracted by the readable content of a page </p>
                                            <a href="#">see more Products</a>
                     </div>
                  </div>
               </div>
                                    <div className="carousel-item">
                                        <img className="second-slide" src="images/banner2.jpg" alt="Second slide" />
                                        <div className="container">
                                            <div className="carousel-caption relative">
                                                <h1>Our <br> <strong className="black_bold">Latest </strong><br>
                                                    <strong className="yellow_bold">Product </strong></h1>
                                                    <p>It is a long established fact that a r <br />
                                                        eader will be distracted by the readable content of a page </p>
                                                    <a href="#">see more Products</a>
                     </div>
                  </div>
                                            </div>
                                            <div className="carousel-item">
                                                <img className="third-slide" src="images/banner2.jpg" alt="Third slide" />
                                                <div className="container">
                                                    <div className="carousel-caption relative">
                                                        <h1>Our <br> <strong className="black_bold">Latest </strong><br>
                                                            <strong className="yellow_bold">Product </strong></h1>
                                                            <p>It is a long established fact that a r <br>
                                                                eader will be distracted by the readable content of a page </p>
                                                                <a href="#">see more Products</a>
                     </div>
                  </div>
               </div>

                                                    </div>
                                                    <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
                                                        <i className='fa fa-angle-right'></i>
                                                    </a>
                                                    <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
                                                        <i className='fa fa-angle-left'></i>
                                                    </a>

                                                </div>
                                            </div>
                                        </div>
                                                    

      </section>
      

        </>
    );

}

export default Slider;
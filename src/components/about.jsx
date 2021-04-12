import layout from '../images/pc_layout.jpg'
import React, { Component } from 'react';
import Service from './service';
import WhyChooce from './whychooce';
const About = (propd) => {

    return (
        <>
            <div className="about">
                <div className="container">
                    <div className="row">
                        <dir className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="about_box">
                                <figure><img src={layout} /></figure>
                            </div>
                        </dir>
                        <dir className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="about_box">
                                <h3>Who is Lighten</h3>
                                <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum.</p>
                                <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </dir>
                    </div>
                </div>
            </div>
            <WhyChooce />
            <Service />
        </>
    );
}


export default About;
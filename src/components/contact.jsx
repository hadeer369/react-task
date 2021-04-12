
import React, { Component, useState } from 'react';
const Contact = () => {


    const [data, setData] = useState({

        name: "",
        email: "",
        phone: "",
        message: ""

    })
    const handleChange = e => {
        let state = { ...data }
        state[e.currentTarget.name] = e.currentTarget.value;
        setData(state)
        console.log(e.currentTarget.value)
    }

    return (
        <>

            <div className="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">

                            <form className="main_form">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                        <input className="form-control" placeholder="Your name" type="text" name="name" value={data.name} onChange={handleChange} />
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                        <input className="form-control" placeholder="Email" type="text" name="email" value={data.email} onChange={handleChange} />
                                    </div>
                                    <div className=" col-md-12">
                                        <input className="form-control" placeholder="Phone" type="text" name="phone" value={data.phone} onChange={handleChange} />
                                    </div>
                                    <div className="col-md-12">
                                        <textarea className="textarea" placeholder="message" name="message" value={data.message} onChange={handleChange}></textarea>
                                    </div>
                                    <div className=" col-md-12">
                                        <button className="send">Send</button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Contact;
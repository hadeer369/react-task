import React, { Component } from 'react';
import Product from './product';

const ShoppingCart = (props) => {


    const { products, onReset, onIncrement, onDecrement, onDelete } = props;
    const filterdProducts = products.filter(p => p.inCart === true);
    console.log(filterdProducts);
    console.log("shipping render");

    return (<>
        <div className="container">
            <button className="btn btn-secondary m-2" onClick={onReset}>Reset</button>

            <div className="container m-50">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="row card-animate">
                            {filterdProducts.map(prd =>


                                <Product key={prd.id}
                                    product={prd}
                                    onDelete={onDelete}
                                    onIncrement={onIncrement}
                                    onDecrement={onDecrement}
                                >
                                    <h5>{prd.id}</h5>
                                </Product>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>

    );
}


export default ShoppingCart;
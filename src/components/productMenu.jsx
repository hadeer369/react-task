import React, { Component } from 'react';
const ProductMenu = (props) => {
    const { product, onAddToCart } = props;
    return (
        <>

            <div className="col-12 col-sm-6 col-md-6 col-lg-3 m-50" style={{ margin: "4px" }}>
                <div className="card h-100 mb-4">
                    <div className="card-header">
                        <h5 className="card-title m-0 p-0 font-weight-bolder text-secondary">{product.name}</h5>
                    </div>
                    <div className="card-body card-img-top">

                        <img src={product.img} alt="" width="100%" height="100%" />
                    </div>
                    <div className="promotion-price-text">{product.price} $</div>
                    <div className="card-footer"><a href="#" className="btn btn-dark" onClick={() => onAddToCart(product)}><i className="fas fa-cart-plus" style={product.inCart ? { color: 'black' } : { color: 'white' }}></i></a></div>
                </div>
            </div>
        </>
    );
}

export default ProductMenu;
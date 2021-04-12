import React, { Component } from 'react';
import qs from 'query-string';
const ProductDetails = (props) => {
    console.log(props.location.search)
    console.log('obj', qs.parse(props.location.search))
    const product = props.products.filter(p => p.id === parseInt(props.match.params.id))[0]

    return (
        <>
            <p>id {product.id}</p>
            <img src={product.img} alt="" width="50px" />
            <p> name {product.name}</p>
            <p>count {product.count}</p>



        </>
    );
}

export default ProductDetails;
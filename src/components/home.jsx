
import React, { Component } from 'react';
import Service from './service';
import Menu from './menu';
import Clients from './clients';

import WhyChoose from './whychooce'
const Home = (props) => {

    return (
        <>
            <WhyChoose />
            <Service />
            <Menu products={props.products}
                onAddToCart={props.onAddToCart}
                types={props.types}
                pageSize={props.pageSize}
                activePage={props.activePage}
                activeFilter={props.activeFilter}
                onActivePageChange={props.onActivePageChange}
                onActiveFilterChange={props.onActiveFilterChange}
                searchVal={props.searchVal} onSearch={props.onSearch}

                {...props} />
            <Clients />
        </>
    );
}


export default Home;
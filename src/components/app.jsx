import React, { Component, useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import ShoppingCart from './shoppingCart';
import NavBar from './navbar';
import Contact from './contact';
import About from './about';
import Home from './home';
import NotFound from './notFount';
import Menu from './menu';
import Footer from './footer'

import ProductDetails from './productDetails';
import Admin from './admin';
import ProductForm from './productForm';
import Header from './header'
const App = (props) => {
    const [originalState, setOriginalState] = useState({ products: [] });
    // state = {
    //     products: [

    //     ], pageSize: 4,
    //     activePage: 1,
    //     activeFilter: 0,
    // }
    const [stateProduct, setStateProduct] = useState({ products: [] });
    const [type, setType] = useState({ types: [] });
    const [sort, setSort] = useState({ sorts: [] });

    const [pageSize, setPageSize] = useState(4);
    const [activePage, setActivePage] = useState(1);
    const [activeFilter, setActiveFilter] = useState(0);
    const [activeSort, setActiveSort] = useState(0);

    const searchVal = React.createRef();
    // async componentDidMount() {
    //     const { data } = await axios.get('http://localhost:3000/products/');
    //     console.log(data);
    //    setState({ products: data })
    //     // const promise = fetch('https://jsonplaceholder.typicode.com/todos')
    //     //     .then(response => response.json())
    //     //     .then(json => console.log(json))
    //     // console.log("shipping=>cdm")
    // }
    async function fetchData() {
        // Call fetch as usual
        const { data } = await axios.get('http://localhost:3000/products/');
        
        //originalData = data;
        // console.log("origimnal", originalData)
        console.log("data", data)
        // Save the posts into state
        // (look at the Network tab to see why the path is like this)

        setStateProduct({ products: data });
        const types = await axios.get('http://localhost:3000/types/');

        console.log("types0", types);

        setType({ types: types.data })
        const sorts = await axios.get('http://localhost:3000/sorts/');

        console.log("sorts0s", sorts.data);
        setSort({ sorts: sorts.data })

    }
    useEffect(() => {

        fetchData();

    }, []);

    // useEffect(async () => {
    //     const result = await axios(
    //         'http://localhost:3000/products/',
    //     );

    //     console.log("res", result)
    //     setOriginalState({ products: result.data })
    //     setStateProduct({ products: result.data });
    // }, []);

    console.log("stateeeeee", stateProduct)

    //Admin
    //handle delete product

    const handleDeleteProduct = async (prd) => {

        //clone old
        const oldProducts = { ...stateProduct.products };

        await axios.delete('http://localhost:3000/products/' + prd.id);

        //change in front end
        try {
            let filltered = stateProduct.products.filter((pr) => pr !== prd)

            setStateProduct({ products: filltered })
        } catch (err) {
            alert(err);
            setStateProduct({ products: oldProducts })
        }

    }
    console.log("stateeeeee", stateProduct)

    const handleEditProduct = (pr) => {
        console.log("prd edit")
    }
    const handleAddToCart = (prd) => {

        console.log('added');
        //clone
        const products = stateProduct.products;
        const index = products.indexOf(prd);
        console.log(index)
        //edit
        if (products[index].inCart) {
            products[index].inCart = false;
        }
        else {
            products[index].inCart = true;
        }

        console.log(products)

        //set state
        setStateProduct({ products })
        // prd.inCart = true;
    }
    const handleDelete = (prd) => {
        //  await axios.delete('http://localhost:3000/products/' + prd.id);
        console.log(prd)
        console.log("delte fire")
        let filltered = stateProduct.products.filter((pr) => pr !== prd)
        console.log("filterd", filltered)
        setStateProduct({ products: filltered })

    }
    const handleSearch = (e) => {
        e.preventDefault();
        const value = searchVal.current.value;
        //clone
        let products = [...stateProduct.products];
        if (value) {
            console.log("if")

            products = products.filter(pr => pr.name.includes(value))
        }
        else {
            console.log("else")

        }
        console.log(products)


        //setState
        setStateProduct({ products })

        console.log("search", searchVal.current.value)



    }

    const handleIncrement = (pr) => {

        //clone
        const products = [...stateProduct.products];
        const index = products.indexOf(pr);
        //edit
        products[index].count++;

        //set state
        setStateProduct({ products })
        //console.log(this)


    }

    const handleDecrement = (pr) => {

        //clone
        let products = [...stateProduct.products];
        const index = products.indexOf(pr);

        products[index].count = products[index].count-- > 0 ? products[index].count-- : 0;
        console.log(products[index].count)
        //set state
        setStateProduct({ products })
        console.log("dec")

    }
    const handleReset = () => {
        console.log("Reset fired")
        //clone
        let prds = [...stateProduct.products];
        console.log(prds)
        //edit
        let newProducts = prds.map(p => {
            p.count = 0;
            return p;
        })
        // //set state
        setStateProduct({ products: newProducts })
    }

    // const handleSort(e) {
    //     e.preventDefault();
    //     console.log("Sort");
    //     console.log("e", e.target)
    // }
    console.log("original state", originalState)



    const handleChangeActivePage = (page) => {
        setActivePage(page);
    };

    const handleChangeActiveFilter = (type) => {
        setActiveFilter(type.id);
        setActivePage(1);
    };
    const handleChangeActiveSort = (type) => {
        setActiveSort(type.id);
        setActivePage(1);
    };

    return (
        <>
            <Header productsCount={stateProduct.products.filter(p => p.inCart).length} />
            {/* <NavBar searchVal={searchVal} onSearch={handleSearch} productsCount={stateProduct.products.filter(p => p.inCart && p.count > 0).length} /> */}


            <Switch>
                <Route path="/contact" component={Contact} />
                <Route path="/menu" render={(props) => <Menu products={stateProduct.products}
                    onAddToCart={handleAddToCart}
                    types={type.types}
                    sorts={sort.sorts}

                    pageSize={pageSize}
                    activePage={activePage}
                    onActivePageChange={handleChangeActivePage}
                    activeFilter={activeFilter}
                    activeSort={activeSort}

                    onActiveFilterChange={handleChangeActiveFilter}
                    onActiveSortChange={handleChangeActiveSort}
                    // searchVal={searchVal} onSearch={handleSearch}


                    {...props}
                />} />
                <Route path="/admin" render={(props) => <Admin products={stateProduct.products}
                    onDeleteProduct={handleDeleteProduct}
                    onEditProduct={handleEditProduct}
                    types={type.types}

                    {...props}
                />} />

                <Route path="/notfound" component={NotFound} />
                <Route path="/about" component={About} />
                <Route path="/productDetails/:id/:name?" render={(props) => <ProductDetails
                    products={stateProduct.products}
                    {...props}
                />} />
                <Route path="/productForm/:id" render={(props) => <ProductForm
                    products={stateProduct.products}
                    {...props}
                />} />

                <Route path="/cart" render={(props) =>
                    <ShoppingCart
                        products={stateProduct.products}
                        onIncrement={handleIncrement}
                        onDecrement={handleDecrement}
                        onDelete={handleAddToCart}
                        onReset={handleReset}
                        {...props}
                    />
                } />
                <Route path="/home" exact render={(props) => <Home

                    products={stateProduct.products}
                    onAddToCart={handleAddToCart}
                    types={type.types}
                    sorts={sort.sorts}

                    pageSize={pageSize}
                    activePage={activePage}
                    activeFilter={activeFilter}
                    activeSort={activeSort}

                    onActivePageChange={handleChangeActivePage}
                    onActiveFilterChange={handleChangeActiveFilter}
                    onActiveSortChange={handleChangeActiveSort}
                    searchVal={searchVal} onSearch={handleSearch}


                    {...props}
                />} />
                {/* <Route path="/home" exact component={Home} /> */}
                <Redirect from="/" to="/home" />
                <Redirect to="notfound" />

            </Switch>


            <Footer />
        </>
    );
}


export default App;
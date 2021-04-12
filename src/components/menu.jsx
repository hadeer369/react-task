import React, { Component } from "react";
import ProductMenu from "./productMenu";
import Filter from "./filter";
import Sort from "./sort";
import Pagination from "./pagination";
const searchVal = React.createRef();
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
            }
        }
    }
};
const Menu = (props) => {
    console.log("prp", props);
    console.log("sorttt", props.sorts.sorts);
    let products = [...props.products];
    // if (props.activeFilter) {
    //     products = products.filter(
    //         (product) => product.type === props.activeFilter
    //     );
    // }
    // if (props.activeSort) {
    //     switch (props.activeSort) {
    //         case 1:
    //             products = products.sort((a, b) => (parseInt(a.price) - parseInt(b.price)))
    //             break;
    //         case 2:
    //             products = products.sort((a, b) => (parseInt(b.price) - parseInt(a.price)));
    //             break;

    //         default:
    //             break;
    //     }
    // }
    // if (searchVal) {

    // }

    let filteredProducts = props.products;
    if (props.activeFilter) {
        console.log("oos")
        console.log("aciv", filteredProducts)
        filteredProducts = props.products.filter(
            (p) => p.type == props.activeFilter
            //  console.log(p.type);
        );
    }

    console.log("filterdData", filteredProducts)
    // Sort
    let sortedProducts = filteredProducts;
    if (props.activeSort == 0) {
        sortedProducts = filteredProducts;
    }
    if (props.activeSort == 1) {
        sortedProducts = sortedProducts.sort((a, b) => {
            return parseInt(a.price) - parseInt(b.price);
        });
    } else if (props.activeSort == 2) {
        sortedProducts = sortedProducts.sort((a, b) => {
            return parseInt(b.price) - parseInt(a.price);
        });
    } else {
        sortedProducts = filteredProducts;
    }
    // const sortByPrice = async (by) => {
    //     //   await fetchData();
    //     //    console.log("orig", stateProduct)
    //     if (by === "dsc") {
    //         //  let sortedProductsDsc;
    //         console.log("sortDes");
    //         sortedProducts = filteredProducts.sort((a, b) => {
    //             return parseInt(b.price) - parseInt(a.price);
    //         });
    //     } else if (by === "asc") {
    //         // fetchData();

    //         console.log("sortAes");
    //         //let sortedProductsDsc;
    //         sortedProducts = filteredProducts.sort((a, b) => {
    //             return parseInt(a.price) - parseInt(b.price);
    //         });
    //     } else {
    //         //    await fetchData();

    //         // console.log("orig else", originalState)

    //         //  fetchData();
    //         sortedProducts = filteredProducts;
    //     }
    // };

    //  search
    // let searchProducts = sortedProducts;
    /////////////////////////////////////




    const handleSearch = (e) => {
        e.preventDefault();
        const value = searchVal.current.value;
        //clone
        let products = [...sortedProducts];
        if (value) {
            console.log("if");

            products = products.filter((pr) => pr.name.includes(value));
        } else {
            console.log("else");
        }
        // console.log(products)

        //setState
        //setStateProduct({ products })

        console.log("search", searchVal.current.value);
    };
    // Pagination
    const { activePage, pageSize } = props;
    let start = (activePage - 1) * pageSize;
    let end = start + pageSize;
    let showProducts = filteredProducts.slice(start, end);

    return (
        <>
            {/* <div className="row">
                <div className="mx-auto">
                    <form className="form-inline my-2 my-lg-0" onSubmit={props.onSearch}>
                        <input
                            ref={props.searchVal}
                            className="form-control mr-sm-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />

                        <button
                            className="btn btn-outline-dark my-2 my-sm-0"
                            type="submit"
                        >
                            Search{" "}
                        </button>
                    </form>
                </div>
            </div> */}

            <div className="row">
                <div className="mx-auto">
                    <div className="col-lg-12">
                        <h1 className="display-2 heading-big heading-big-square text-center">
                            products
            </h1>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <h4>Filter By</h4>
                        <Filter
                            // products={props.products}
                            types={props.types}
                            activeFilter={props.activeFilter}
                            onActiveFilterChange={props.onActiveFilterChange}
                        />
                        <br />
                        <h4>Sory By Price</h4>

                        <Sort
                            // products={filteredProducts}
                            sorts={props.sorts}
                            activeSort={props.activeSort}
                            onActiveSortChange={props.onActiveSortChange}
                        />


                    </div>

                    <div className="col">
                        <div className="mx-auto">
                            <div className="col-lg-12">
                                <div className="text-center my-3">
                                    <div className="card-deck no-gutters">
                                        {showProducts.map((el) => (
                                            <ProductMenu
                                                key={el.id}
                                                product={el}
                                                onAddToCart={props.onAddToCart}
                                            />
                                        ))}
                                    </div>

                                    {/* Pagination */}
                                    {products.length >= props.pageSize && (
                                        <Pagination
                                            pageSize={props.pageSize}
                                            activePage={props.activePage}
                                            count={products.length}
                                            onActivePageChange={props.onActivePageChange}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Menu;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Admin = (props) => {


    const { products } = props;
    return (
        <>
            <div className="container">
                <h1>Admin Pannal</h1>
                <button className="btn btn-dark mb-4"
                    onClick={() => props.history.push("/productForm/new")}>Add</button>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Catogrie</th>

                            <th scope="col">Name</th>
                            <th scope="col">Count</th>

                            <th scope="col">Price</th>
                            {/* <th scope="col">Img</th> */}
                            <th scope="col"></th>

                            <th scope="col"></th>


                        </tr>
                    </thead>
                    <tbody>
                        {props.products.map(el =>
                            <tr key={el.id}>
                                <th scope="row">{el.id}</th>
                                <td>{props.types.id = el.type}</td>
                                <td>{el.name}</td>
                                <td>{el.count}</td>
                                <td>{el.price}</td>
                                <td>{el.inCart}</td>
                                {/* <td>{el.img}</td> */}
                                <td style={{ cursor: "pointer" }}
                                    onClick={() => props.history.push(`/productForm/${el.id}`)}>



                                    <i className="fas fa-edit">
                                    </i>


                                </td>
                                <td style={{ cursor: "pointer" }}
                                    onClick={() => props.onDeleteProduct(el)}>
                                    <i className="fas fa-trash">
                                    </i>
                                </td>


                            </tr>

                        )}
                    </tbody>
                </table>

            </div>

        </>
    );
}


export default Admin;
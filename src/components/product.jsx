import { Component } from 'react';
import { Link } from 'react-router-dom';
//import { Container } from 'react-bootstrap';
//import ReactDom from 'react-dom';
//import { Product } from './product';
//import '../../nod
export class Product extends Component {
    // state = {


    //     id: this.props.product.id,
    //     name: this.props.product.name,
    //     count: this.props.product.count,
    //     img: this.props.product.img,

    //     //colors: ["r", "g", "b"]

    // }

    // handleDelete = (id) => {
    //     console.log(this)
    //     console.log("delte fire")
    //     let item = this.state;
    //     //const deleted = item.splice(id)
    //     //   this.setState({ products: item })
    //     // delete item;

    //     console.log("item", item)

    //     // this.setState({ state: item })

    // }
    render() {
        console.log("render =product")
        return (
            <>

                {/* <div className="container m-50">
                    <div className="row"> */}
                {/* <div className="col-sm-12">
                    <div className="row card-animate"> */}
                <div className="col-4 m-50">
                    <div className="card border">
                        <div className="card-body">
                            <div className="card-title">
                                <span style={{ color: 'red' }}>
                                    <Link to={`productDetails/${this.props.product.id}`}>
                                        {this.props.product.name}
                                    </Link>
                                </span>
                            </div>
                            <div className="card-image" height="200px">
                                <img src={this.props.product.img} alt={this.props.product.img} height="150px" width="100%" />
                            </div>
                            <div className="text-center">
                                <button className="btn btn-primary btn-sm m-2"
                                    onClick={() => this.props.onDecrement(this.props.product)}>-</button>


                                <span className={this.props.product.count === 0 ? "badge warning-danger m-2" : "badge primary-primary m-2"}>{this.props.product.count}</span>
                                <button className="btn btn-primary btn-sm m-2"
                                    onClick={
                                        () => this.props.onIncrement(this.props.product)}>+</button>
                            </div>
                            <div className="text-center">
                                <span style={{ cursor: "pointer" }} onClick={() => this.props.onDelete(this.props.product)}> <i className="fas fa-trash-alt m-2"></i></span>

                            </div>

                        </div>
                    </div>
                </div>


                {/* </div>
                </div> */}
                {/* </div>
                </div> */}

            </>


        );
    }
}

export default Product;
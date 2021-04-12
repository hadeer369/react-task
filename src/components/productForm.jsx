import React, { useState, useEffect } from 'react';
import axios from 'axios'
const ProductForm = (props) => {
    const [stateProduct, setStateProduct] = useState({
        id: "",
        name: "",
        price: "",
        img: "",
        type: 0,
        count: 0

    })

    useEffect(() => {
        async function fetchData() {
            const id = props.match.params.id;
            if (id !== 'new') {

                const { data } = await axios.get("http://localhost:3000/products/" + id)
                //clone
                let state = { ...stateProduct };
                //edit
                setStateProduct(state.id = data.id);
                setStateProduct(state.name = data.name);
                setStateProduct(state.type = data.type);
                setStateProduct(state.count = data.count);

                setStateProduct(state.img = data.img);
                setStateProduct(state.price = data.price);

                //set state
                setStateProduct(state)

            }
            console.log(id)
        }
        fetchData();
    }, []);



    const handleSubmit = async (e) => {
        e.preventDefault();
        //add
        if (props.match.params.id === 'new') {
            const obj = { ...stateProduct, inCart: false }
            console.log(obj)
            await axios.post("http://localhost:3000/products/", obj)
            //  console.log('submit')
        } else {
            //edit
            const obj = { ...stateProduct, inCart: false }
            //delete id
            delete obj.id;
            await axios.patch("http://localhost:3000/products/" + stateProduct.id, obj)

        }
        props.history.replace('/admin')
    }
    const handleChange = e => {
        let state = { ...stateProduct }
        state[e.currentTarget.name] = e.currentTarget.value;
        setStateProduct(state)
        console.log(e.currentTarget.value)
    }

    return (
        <>
            <div className="container">
                <h1>{props.match.params.id === 'new' ? 'Add' : "Edit"} Product</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="catogrie">Catogrie</label>
                        {/* <input type="text" className="form-control" id="catogrie" name="catogrie" value={stateProduct.catogrie} onChange={handleChange} /> */}
                        <select name="type" className="form-control" id="type" value={stateProduct.catogrie} onChange={handleChange}>

                            <option value="1" selected={(stateProduct.type == 1)} > Bag</option>
                            <option value="2" selected={(stateProduct.type == 2)}> BackBag</option>
                            <option value="3" selected={(stateProduct.type == 3)}>Shoes</option>


                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" name="name" value={stateProduct.name} onChange={handleChange} />
                    </div>
                    {/* <div className="form-group">
                        <label htmlFor="count">Count</label>
                        <input type="text" className="form-control" id="count" name="count" value={this.state.count} onChange={this.handleChange} />
                    </div> */}
                    <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input type="text" className="form-control" id="price" name="price" value={stateProduct.price} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="count">Count</label>
                        <input type="text" className="form-control" id="count" name="count" value={stateProduct.count} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="img">ImageURl</label>
                        <input type="text" className="form-control" id="img" name="img" value={stateProduct.img} onChange={handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">{props.match.params.id === 'new' ? 'Add' : "Edit"}</button>
                </form>
            </div>
        </>
    );
}


export default ProductForm;
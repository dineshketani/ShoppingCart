import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { delItem } from '../redux/action/index';

const Cart = () => {
    const state = useSelector(state => state.addItem); // Assuming addItem is the reducer for your cart items
    const dispatch = useDispatch();

    const handleButton = (product) => {
        dispatch(delItem(product)); // Assuming delItem is the action creator to remove an item
    };

    const product = (product) => {
        return (
            <>
            <div className="px-4 my-5 bg-light">
                <div className="container py-4">
            <div className="row">
                <div className="col-md-4">
                    <img src={product.image} alt={product.title} height="200px" width="180px"/>
                </div>
                <div className="col-md-4">
                    <h3>{product.title}</h3>
                    <p className="lead fw-bold">
                        {product.qty} X ${product.price} = ${product.qty * product.price}
                    </p>
                    <button className="btn btn-outline-dark me-4" onClick={() =>handleButton(product)}>
                        <i className="fa fa-minus"></i>
                    </button>
                    <button className="btn btn-outline-dark me-4" onClick={() =>handleButton(product)}>
                        <i className="fa fa-plus"></i>
                    </button>

                </div>
            </div>
            </div>
            </div>
            </>
    )}
         }

export default Cart;

import React, { useState } from "react";
import formatCurrency from "../utils";
import { Fade, Zoom } from "react-reveal";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Modal from "react-modal";

import { removeFromCart } from "../redux/actions/cartActions";
import { clearOrder, createOrder } from "../redux/actions/orderActions";

const Cart = () => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [inputValues, setInputValues] = useState({
    email: "",
    name: "",
    address: "",
  });
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const order = useSelector((state) => state.order?.order);

  const submitHandler = (e) => {
    e.preventDefault();
    const order = {
      ...inputValues,
      cartItems,
      total: cartItems.reduce((a, c) => a + c.price * c.count, 0),
    };
    dispatch(createOrder(order));
  };

  const handleChange = (e) => {
    e.preventDefault();
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const closeModal = () => {
    dispatch(clearOrder());
  };

  return (
    <>
      {cartItems?.length === 0 ? (
        <div className="cart cart-header">Cart is empty</div>
      ) : (
        <div className="cart cart-header">
          You have {cartItems?.length} in the cart
        </div>
      )}

      {order && (
        <Modal isOpen={true} onRequestClose={closeModal}>
          <Zoom>
            <button className="close-modal" onClick={closeModal}>
              x
            </button>
            <div className="order-details">
              <h3 className="success-message">You order has been placed</h3>
              <h2>Order {order._id}</h2>
              <ul>
                <li>
                  <div>Name:</div>
                  <div>{order.name}</div>
                </li>
                <li>
                  <div>Email:</div>
                  <div>{order.email}</div>
                </li>
                <li>
                  <div>Address:</div>
                  <div>{order.address}</div>
                </li>
                <li>
                  <div>Date:</div>
                  <div>{order.createdAt}</div>
                </li>
                <li>
                  <div>Total:</div>
                  <div>{formatCurrency(order.total)}</div>
                </li>
                <li>
                  <div>Cart Items:</div>
                  <div>
                    {order.cartItems.map((x) => (
                      <div key={x.title}>
                        {x.count} {" x "} {x.title}
                      </div>
                    ))}
                  </div>
                </li>
              </ul>
            </div>
          </Zoom>
        </Modal>
      )}

      <div>
        <div className="cart">
          <Fade left cascade>
            <ul className="cart-items">
              {cartItems?.map((item) => (
                <li key={item._id}>
                  <div>
                    <img src={item.image} alt={item.titles} />
                  </div>
                  <div>
                    <div>{item.title}</div>
                    <div className="right">
                      {formatCurrency(item.price)} x {item.count}{" "}
                      <button
                        className="button"
                        onClick={() => dispatch(removeFromCart(item))}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Fade>
        </div>
        {cartItems?.length > 0 && (
          <>
            <div className="cart">
              <div className="total">
                <div>
                  Total:{" "}
                  {formatCurrency(
                    cartItems?.reduce((a, c) => a + c.price * c.count, 0)
                  )}
                </div>
                <button
                  onClick={() => setShowCheckout(!showCheckout)}
                  className="button primary"
                >
                  Proceed
                </button>
              </div>
            </div>
            {showCheckout && (
              <Fade right cascade>
                <div className="cart">
                  <form onSubmit={submitHandler}>
                    <ul className="form-container">
                      <li>
                        <label>Email</label>
                        <input
                          name="email"
                          type="email"
                          required
                          value={inputValues.email}
                          onChange={handleChange}
                        />
                      </li>
                      <li>
                        <label>Name</label>
                        <input
                          name="name"
                          type="text"
                          required
                          value={inputValues.name}
                          onChange={handleChange}
                        />
                      </li>
                      <li>
                        <label>Address</label>
                        <input
                          name="address"
                          type="text"
                          required
                          value={inputValues.address}
                          onChange={handleChange}
                        />
                      </li>
                    </ul>
                    <button type="submit" className="button primary">
                      Submit
                    </button>
                  </form>
                </div>
              </Fade>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Cart;

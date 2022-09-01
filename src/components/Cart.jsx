import React, { useState } from "react";
import formatCurrency from "../utils";
import { Fade } from "react-reveal";

const Cart = ({ cartItems, removeFromCart, getFormValues }) => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [inputValues, setInputValues] = useState({
    email: "",
    name: "",
    address: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    getFormValues(inputValues);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div>
        {cartItems?.length === 0 ? (
          <div className="cart cart-header">Cart is empty</div>
        ) : (
          <div className="cart cart-header">
            You have {cartItems?.length} in the cart
          </div>
        )}
      </div>
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
                        onClick={() => removeFromCart(item)}
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

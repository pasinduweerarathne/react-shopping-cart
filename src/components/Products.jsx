import React, { useEffect, useState } from "react";
import formatCurrency from "../utils";
import Fade from "react-reveal/Fade";
import Modal from "react-modal";
import { Zoom } from "react-reveal";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../redux/actions/productActions";

const Products = ({ addToCart }) => {
  const [showModal, setShowModal] = useState({ product: null });
  const productsFromRedux = useSelector(
    (state) => state.products.filteredItems
  );
  const productsRedux = useSelector((state) => state.products.items);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const openModal = (product) => {
    setShowModal({ product });
  };

  const closeModal = () => {
    setShowModal({ product: null });
  };

  const { product } = showModal;

  return (
    <div>
      {productsRedux && (
        <Fade bottom cascade>
          <ul className="products">
            {productsFromRedux
              ? productsFromRedux?.map((product) => (
                  <li key={product._id}>
                    <div className="product">
                      <a
                        href={"#" + product._id}
                        onClick={() => openModal(product)}
                      >
                        <img src={product.image} alt={product.title} />
                        <p>{product.title}</p>
                      </a>
                      <div className="product-price">
                        <div>{formatCurrency(product.price)}</div>
                        <button
                          className="button primary"
                          onClick={() => addToCart(product)}
                        >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </li>
                ))
              : productsRedux?.map((product) => (
                  <li key={product._id}>
                    <div className="product">
                      <a
                        href={"#" + product._id}
                        onClick={() => openModal(product)}
                      >
                        <img src={product.image} alt={product.title} />
                        <p>{product.title}</p>
                      </a>
                      <div className="product-price">
                        <div>{formatCurrency(product.price)}</div>
                        <button
                          className="button primary"
                          onClick={() => addToCart(product)}
                        >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
          </ul>
        </Fade>
      )}
      {product && (
        <Modal isOpen={true} onRequestClose={closeModal}>
          <Zoom>
            <button className="close-modal" onClick={closeModal}>
              x
            </button>
            <div className="product-details">
              <img src={product.image} alt={product.title} />
              <div className="product-details-description">
                <p>
                  <b>{product.title}</b>
                </p>
                <p>{product.description}</p>
                <p>
                  Available Sizes:{" "}
                  {product.availableSizes.map((x) => {
                    return (
                      <span key={x}>
                        <button className="button">{x}</button>
                      </span>
                    );
                  })}
                </p>
                <div className="product-price">
                  <div>{formatCurrency(product.price)}</div>
                  <button
                    className="button primary"
                    onClick={() => {
                      addToCart(product);
                      closeModal();
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </Zoom>
        </Modal>
      )}
    </div>
  );
};

export default Products;

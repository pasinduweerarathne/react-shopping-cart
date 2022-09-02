import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterProducts, sortProducts } from "../redux/actions/productActions";

const Filter = () => {
  const products = useSelector((state) => state.products.items);
  const filteredProducts = useSelector((state) => state.products.filteredItems);
  const size = useSelector((state) => state.products.size);
  const sort = useSelector((state) => state.products.sort);
  const dispatch = useDispatch();

  return (
    <div className="filter">
      <div className="filter-result">
        {filteredProducts ? filteredProducts?.length : products?.length}{" "}
        Products
      </div>
      <div className="filter-sort">
        Order{" "}
        <select
          value={sort}
          onChange={(e) => dispatch(sortProducts(products, e.target.value))}
        >
          <option value="latest">Latest</option>
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>
        </select>
      </div>
      <div className="filter-size">
        Filter{" "}
        <select
          value={size}
          onChange={(e) => dispatch(filterProducts(products, e.target.value))}
        >
          <option value="">All</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;

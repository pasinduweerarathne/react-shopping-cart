// import { useState } from "react";
import Cart from "./components/Cart";
import Filter from "./components/Filter";
import Products from "./components/Products";

function App() {
  // const [cartItems, setCartItems] = useState(
  //   localStorage.getItem("cartItems")
  //     ? JSON.parse(localStorage.getItem("cartItems"))
  //     : []
  // );

  // const filterProducts = (e) => {
  //   setSize(e.target.value);
  //   if (e.target.value === "") {
  //     setProducts(data.products);
  //   } else {
  //     setProducts(
  //       data.products.filter(
  //         (product) => product.availableSizes.indexOf(e.target.value) >= 0
  //       )
  //     );
  //   }
  // };

  // const sortProducts = (e) => {
  //   setSort(e.target.value);
  //   const sort = e.target.value;
  //   setProducts(
  //     products
  //       .slice()
  //       .sort((a, b) =>
  //         sort === "lowest"
  //           ? a.price > b.price
  //             ? 1
  //             : -1
  //           : sort === "highest"
  //           ? a.price < b.price
  //             ? 1
  //             : -1
  //           : a._id > b._id
  //           ? 1
  //           : -1
  //       )
  //   );
  // };

  // const addToCart = (product) => {
  //   const exist = cartItems.find((x) => x._id === product._id);
  //   if (exist) {
  //     setCartItems(
  //       cartItems.map((item) =>
  //         item._id === product._id ? { ...exist, count: exist.count + 1 } : item
  //       )
  //     );
  //   } else {
  //     setCartItems([...cartItems, { ...product, count: 1 }]);
  //   }
  //   localStorage.setItem("cartItems", JSON.stringify(cartItems));
  // };

  // const removeFromCart = (product) => {
  //   setCartItems(cartItems.filter((x) => x._id !== product._id));
  //   localStorage.setItem(
  //     "cartItems",
  //     JSON.stringify(cartItems.filter((x) => x._id !== product._id))
  //   );
  // };

  // const getFormValues = (formValues) => {
  //   alert("name " + formValues.name);
  // };

  return (
    <div className="grid-container ">
      <header>
        <a href="/">React Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main-content">
            <Filter />
            <Products />
          </div>
          <div className="sidebar">
            <Cart />
          </div>
        </div>
      </main>
      <footer>Cart Footer</footer>
    </div>
  );
}

export default App;

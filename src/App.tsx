import React from "react";

import Navbar from "@components/Navbar";
import ProductItem from "@components/ProductItem";
import Products from "@components/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@styles/App.scss";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product">
            <Route path=":id" element={<ProductItem />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

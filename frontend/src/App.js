import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppStyled } from "./AppStyle";
import Shop from "./components/Routes/SHOP/index";
import Home from "./components/Routes/Home";
import Layout from "./components/Routes/Layout";
import ProductDetail from "./components/ProductDetail";
import Admin from "./components/Page/Admin/Admin";
import CreateProduct from "./components/Page/Admin/CreateProduct/CreateProduct";
import CreateCategories from "./components/Page/Admin/CreateCategories/CreateCategories";

function App() {
  return (
    <AppStyled className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="detailts/:idProduct" element={<ProductDetail />} />
          <Route path="favorites" />
        </Route>

        <Route path="/admin" element={<Admin />}>
          <Route path="create/product" element={<CreateProduct />} />
          <Route path="create/category" element={<CreateCategories />} />
        </Route>
      </Routes>
    </AppStyled>
  );
}

export default App;

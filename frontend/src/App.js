import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppStyled } from "./AppStyle";
import Shop from "./components/Routes/SHOP/index";
import { Footer } from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Routes/Home";
import ProductDetail from "./components/ProductDetail";
import Admin from "./components/Page/Admin/Admin";
import CreateProduct from "./components/Page/Admin/CreateProduct/CreateProduct";

function App() {
  return (
    <AppStyled className="App">
      <Header />
      <Routes>
        <Route path="favorites" />
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/favorites" />
        <Route path={`/detailts/:idProduct`} element={<ProductDetail />} />
        <Route path="admin/*" element={<Admin />}>
          <Route path="create/product" element={<CreateProduct />} />
        </Route>
      </Routes>
      <Footer />
    </AppStyled>
  );
}

export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppStyled } from "./AppStyle";
import Shop from "./components/Routes/SHOP/index";
// ------------Añadir componentes: --------------//
//import Shop from './components/Shop/index';                             //-Home Shop
//import ProductDetail from './components/ProductDetail/index';           //-Detalle del producto
//import ProductCreateForm from './components/ProductCreateForm/index';   //-Form creación de producto
import Header from "./components/Header/Header";

function App() {
  return (
    <AppStyled className="App">
      <Header />
      <Routes>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/favorites" />
        <Route path="/home" />
        <Route path={`/details/:idProduct`} />
        <Route path="dashboard/*">
          <Route path="addproducts" />
        </Route>
      </Routes>
    </AppStyled>
  );
}

export default App;

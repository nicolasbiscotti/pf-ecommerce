import React from 'react';
import { Route, Routes } from "react-router-dom";
import { AppStyled } from "./AppStyle";

import NavBar from './components/NavBar/index';
// ------------Añadir componentes: --------------//
//import Shop? from './components/Shop/index';                             -Home Shop
//import ProductDetail? from './components/ProductDetail/index';           -Detalle del producto
//import ProductCreateForm? from './components/ProductCreateForm/index';   -Form creación de producto


function App() {
  return (
    <AppStyled className="App">
      <Routes>
        {/* 
        <Route path="/" element={<LandingPage/>}/>  ---------landing Page---------  */}

        <Route path="shop/*" element={<NavBar/>}>
          {/*-Rutas de los componentes:  1.HomeSHOP(Shop)  2.DETALLEPROD(ProductDetail)  3.FORMCREACPROD(ProductCreateForm)
              <Route path="" element={<Shop?/>}/>
              <Route path={`/shop/products/:idProduct`} element={<ProductDetail/>} />
              <Route path="?product/addproduct" element={<ProductCreateForm/>}/> */
          }
        </Route>
        
      </Routes>
    </AppStyled>
  );
}

export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppStyled } from "./AppStyle";
import { Footer } from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/pages/Home/Home";

function App() {
  return (
    <AppStyled className="App">
      <Header />
      <Routes>
        <Route path="shop" />
        <Route path="favorites" />
        <Route path="/home" element={<Home />} />
        <Route path={`/details/:idProduct`} />
        <Route path="dashboard/*">
          <Route path="addproducts" />
        </Route>
      </Routes>
      <Footer />
    </AppStyled>
  );
}

export default App;

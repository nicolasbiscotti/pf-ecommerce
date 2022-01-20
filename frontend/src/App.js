import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppStyled } from "./AppStyle";
import { Footer } from "./components/Footer/Footer";
import NavBar from "./components/NavBar/index";
import Header from "./components/Header/Header";

function App() {
  return (
    <AppStyled className="App">
      <Header />
      <Routes>
        <Route path="shop" />
        <Route path="favorites" />
        <Route path="/home" />
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

import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppStyled } from "./AppStyle";
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
    </AppStyled>
  );
}

export default App;

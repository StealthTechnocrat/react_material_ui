import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/cart/Cart";
import ContextProvider from "./context/ContextProvider";

const App = () => {
  return (
    <ContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home/cart" element={<Cart />} />
        </Routes>
      </Router>
    </ContextProvider>
  );
};

export default App;

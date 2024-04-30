import React from "react";
import "./scss/app.scss";
import Header from "./components/Header";
import Main from "./pages/Main";
import NotFoundPage from "./pages/NotFound";
import Cart from "./pages/Cart";
import { Routes, Route } from "react-router-dom";
import OrderPage from "./pages/OrderPage/OrderPage";
import Contacts from "./pages/Contacts/Contacts";
import AboutUs from "./pages/AboutUs/AboutUs";
import InfoTooltip from "./components/InfoTooltip/InfoTooltip";
import PizzaPage from "./pages/PizzaPage/PizzaPage";

const App: React.FC = () =>{
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/:id" element={<PizzaPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <InfoTooltip />
      </div>
    </div>
  );
}

export default App;

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

// import { useSelector, useDispatch } from "react-redux";
// import {  increment, multiplication } from "./redux/slices/counterSlice";

// import pizzas from './assets/data/pizzas.json'
export const SearchContext = React.createContext("");
function App() {
  const [searchValue, setSearchValue] = React.useState("");

  return (

    <div className="wrapper">
      <SearchContext.Provider value={{searchValue, setSearchValue}}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;

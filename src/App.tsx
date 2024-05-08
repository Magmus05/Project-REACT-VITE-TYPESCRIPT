import React, { Suspense } from "react";
import "./scss/app.scss";
import Main from "./pages/Main";
import { Routes, Route } from "react-router-dom";
// import Loadable from "react-loadable";
import { Header, InfoTooltip, Preloader } from "./components";

// const LoadableComponent = Loadable({
//   loader: () => import("./pages/Cart"),
//   loading: () => <Preloader />,
// });

const Cart = React.lazy(() => import("./pages/Cart"));
const OrderPage = React.lazy(() => import("./pages/OrderPage/OrderPage"));
const PizzaPage = React.lazy(() => import("./pages/PizzaPage/PizzaPage"));
const Contacts = React.lazy(() => import("./pages/Contacts/Contacts"));
const AboutUs = React.lazy(() => import("./pages/AboutUs/AboutUs"));
const NotFoundPage = React.lazy(() => import("./pages/NotFound"));

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/cart"
            element={
              <Suspense fallback={<Preloader />}>
                <Cart />
              </Suspense>
            }
          />
          <Route
            path="/pizza/:id"
            element={
              <Suspense fallback={<Preloader />}>
                <PizzaPage />
              </Suspense>
            }
          />
          <Route
            path="/order"
            element={
              <Suspense>
                <OrderPage />
              </Suspense>
            }
          />
          <Route
            path="/contacts"
            element={
              <Suspense>
                <Contacts />
              </Suspense>
            }
          />
          <Route
            path="/about-us"
            element={
              <Suspense>
                <AboutUs />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense>
                <NotFoundPage />
              </Suspense>
            }
          />
        </Routes>
        <InfoTooltip />
      </div>
    </div>
  );
};

export default App;

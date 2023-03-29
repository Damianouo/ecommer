import Home from "./Home";
import ProductList from "./ProductList";
import Product from "./Product";
import Register from "./Register";
import Login from "./Login";
import Cart from "./Cart";
import Root from "./Root";
import Test from "./Test";

import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

const AllRoutes = () => {
  const location = useLocation();
  const user = false;
  return (
    <AnimatePresence initial={false} mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Root />}>
          <Route index element={<Home />} />
          <Route path='/products' element={<ProductList />} />
          <Route path='/products/:category' element={<ProductList />} />
          <Route path='/product' element={<Product />} />
          <Route path='/product/:id' element={<Product />} />
          <Route
            path='/register'
            element={user ? <Navigate to='/' /> : <Register />}
          />
          <Route
            path='/login'
            element={user ? <Navigate to='/' /> : <Login />}
          />
          <Route path='/cart' element={<Cart />} />
          <Route path='/test' element={<Test />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AllRoutes;

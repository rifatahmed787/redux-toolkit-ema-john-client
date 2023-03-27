import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard/Dashboard";
import Main from "../layout/Main/Main";
import AddProduct from "../pages/Dashboard/AddProduct";
import ProductList from "../pages/Dashboard/ProductList";
import About from "../pages/Main/About/About";
import Cart from "../pages/Main/Cart/Cart";
import ErrorPage from "../pages/Main/ErrorPage/ErrorPage";
import Home from "../pages/Main/Home/Home";
import Payment from "../pages/Main/Payment/Payment";
import Shop from "../pages/Main/Shop/Shop";
import ForgotPass from "../pages/Main/Signin/ForgotPass";
import Signin from "../pages/Main/Signin/Signin";
import Signup from "../pages/Main/Signup/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      // {
      //   path: "/orders",
      //   loader: productsAndCartLoader,
      //   element: (
      //     <PrivateRoute>
      //       <Orders />
      //     </PrivateRoute>
      //   ),
      // },
      // {
      //   path: "/shipping",
      //   element: (
      //     <PrivateRoute>
      //       <Shipping />
      //     </PrivateRoute>
      //   ),
      // },
      {
        path: "/payment",
        element: <Payment />,
      },

      {
        path: "/login",
        element: <Signin />,
      },
      {
        path: "/forgotpass",
        element: <ForgotPass />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/dashboard",
    errorElement: <ErrorPage />,
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <ProductList />,
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
    ],
  },
]);

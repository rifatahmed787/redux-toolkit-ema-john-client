import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import ErrorPage from "../pages/Main/ErrorPage/ErrorPage";
import ForgotPass from "../pages/Main/Signin/ForgotPass";
import Signin from "../pages/Main/Signin/Signin";
import Signup from "../pages/Main/Signup/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      // {
      //   path: "/",
      //   element: <Home />,
      // },
      // {
      //   path: "/shop",
      //   element: <Shop />,
      // },
      // {
      //   path: "/about",
      //   element: <About />,
      // },
      // {
      //   path: "/cart",
      //   element: (
      //     <PrivateRoute>
      //       <Cart />
      //     </PrivateRoute>
      //   ),
      // },
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
      // {
      //   path: "/payment",
      //   element: <Payment />,
      // },

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
  // {
  //   path: "/dashboard",
  //   errorElement: <ErrorPage />,
  //   element: <DashboardLayout />,
  //   children: [
  //     {
  //       path: "/dashboard",
  //       element: <Profile />,
  //     },
  //     {
  //       path: "/dashboard/allusers",
  //       element: <AllUsers />,
  //     },
  //   ],
  // },
]);

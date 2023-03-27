import React from "react";
import { Toaster } from "react-hot-toast";

import "./App.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";

function App() {
  return (
    <div className="mx-auto max-w-[1440px] dark:bg-black min-h-screen">
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;

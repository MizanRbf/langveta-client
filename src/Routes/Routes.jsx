import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayouts/RootLayout";
import HomePage from "../Pages/Home/HomePage";
import Login from "../Layouts/RootLayouts/AuthLayouts/Login";
import Register from "../Layouts/RootLayouts/AuthLayouts/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
]);

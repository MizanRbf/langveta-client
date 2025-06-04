import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayouts/RootLayout";
import HomePage from "../Pages/Home/HomePage";
import Login from "../Layouts/RootLayouts/AuthLayouts/Login";
import Register from "../Layouts/RootLayouts/AuthLayouts/Register";
import ErrorPage from "../Pages/Home/Error/ErrorPage";

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
      {
        path: "/findTutors",
        element: <h1>findTutors</h1>,
      },
      {
        path: "/addTutorials",
        element: <h1>addTutorials</h1>,
      },
      {
        path: "/myTutorials",
        element: <h1>myTutorials</h1>,
      },
      {
        path: "/myBookedTutors",
        element: <h1>myBookedTutors</h1>,
      },
    ],
  },
  {
    path: "/*",
    Component: ErrorPage,
  },
]);

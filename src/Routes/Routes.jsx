import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayouts/RootLayout";
import Login from "../Layouts/RootLayouts/AuthLayouts/Login";
import Register from "../Layouts/RootLayouts/AuthLayouts/Register";
import HomePage from "../Pages/Home/HomePage";
import ErrorPage from "../Pages/Error/errorPage";
import FindTutors from "../Pages/FindTutors/FindTutors";
import AddTutorials from "../Pages/AddTutorials/AddTutorials";
import MyTutorials from "../Pages/MyTutorials/MyTutorials";
import MyBookedTutors from "../Pages/MyBookedTutors/MyBookedTutors";
import UpdateMyTutorials from "../Pages/MyTutorials/UpdateMyTutorials";
import Loader from "../Shared/Loader";

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
        element: <FindTutors></FindTutors>,
      },
      {
        path: "/addTutorials",
        element: <AddTutorials></AddTutorials>,
      },
      {
        path: "/myTutorials",
        element: <MyTutorials></MyTutorials>,
      },
      {
        path: "/myBookedTutors",
        element: <MyBookedTutors></MyBookedTutors>,
      },
      {
        path: "/updateMyTutorials/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/tutorials/${params.id}`),
        hydrateFallbackElement: <Loader></Loader>,
        element: <UpdateMyTutorials></UpdateMyTutorials>,
      },
    ],
  },
  {
    path: "/*",
    Component: ErrorPage,
  },
]);

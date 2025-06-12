import { createBrowserRouter } from "react-router";

import HomePage from "../Pages/Home/HomePage";
import ErrorPage from "../Pages/Error/errorPage";

import AddTutorials from "../Pages/Tutors/AddTutorials";
import MyTutorials from "../Pages/MyTutorials/MyTutorials";
import MyBookedTutors from "../Pages/Tutors/MyBookedTutors";
import UpdateMyTutorials from "../Pages/MyTutorials/UpdateMyTutorials";
import Loader from "../Shared/Loader";
import FindTutors from "../Pages/Tutors/FindTutors";
import TutorsByCategory from "../Pages/Tutors/TutorsByCategory";
import TutorDetails from "../Pages/Tutors/TutorDetails";
import TopRatedTutors from "../Pages/Home/TopRatedTutors";
import RootLayout from "../Layouts/RootLayout.jsx/RootLayout";
import PrivateRoute from "../Provider/PrivateRoute";
import AuthLayout from "../Layouts/AuthLayouts/AuthLayout";
import Login from "../Layouts/AuthLayouts/Login";
import Register from "../Layouts/AuthLayouts/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/topRatedTutors"),
        hydrateFallbackElement: <Loader></Loader>,
        Component: HomePage,
      },
      {
        path: "/findTutors",
        loader: () => fetch("http://localhost:3000/tutorials"),
        hydrateFallbackElement: <Loader></Loader>,
        element: <FindTutors></FindTutors>,
      },
      {
        path: "/find-tutors/:category",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/find-tutors/${params.category}`, {
            credentials: "include",
          }),
        hydrateFallbackElement: <Loader></Loader>,
        element: <TutorsByCategory></TutorsByCategory>,
      },
      {
        path: "/tutor/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/tutor/${params.id}`, {
            credentials: "include",
          }),
        hydrateFallbackElement: <Loader></Loader>,
        element: (
          <PrivateRoute>
            <TutorDetails></TutorDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/addTutorials",
        element: (
          <PrivateRoute>
            <AddTutorials></AddTutorials>
          </PrivateRoute>
        ),
      },
      {
        path: "/myTutorials",
        element: (
          <PrivateRoute>
            <MyTutorials></MyTutorials>
          </PrivateRoute>
        ),
      },
      {
        path: "/myBookedTutors",
        element: (
          <PrivateRoute>
            <MyBookedTutors></MyBookedTutors>
          </PrivateRoute>
        ),
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
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/*",
    Component: ErrorPage,
  },
]);

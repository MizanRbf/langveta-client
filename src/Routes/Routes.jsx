import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayouts/RootLayout";
import Login from "../Layouts/RootLayouts/AuthLayouts/Login";
import Register from "../Layouts/RootLayouts/AuthLayouts/Register";
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
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
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
          fetch(`http://localhost:3000/find-tutors/${params.category}`),
        hydrateFallbackElement: <Loader></Loader>,
        element: <TutorsByCategory></TutorsByCategory>,
      },
      {
        path: "/tutor/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/tutor/${params.id}`),
        hydrateFallbackElement: <Loader></Loader>,
        element: <TutorDetails></TutorDetails>,
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

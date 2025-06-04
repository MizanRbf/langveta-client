import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayouts/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: <h1>HOme</h1>,
      },
    ],
  },
]);

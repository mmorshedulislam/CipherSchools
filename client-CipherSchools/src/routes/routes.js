import { createBrowserRouter } from "react-router-dom";
import Player from "../Home/Player";
import HomeLayout from "../layouts/HomeLayout";
import Main from "../layouts/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <HomeLayout />,
      },
      {
        path: "/player",
        element: <Player />,
      },
    ],
  },
]);

import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Player from "../Home/Player";
import HomeLayout from "../layouts/HomeLayout";
import Main from "../layouts/Main";
import Notifications from "../Notifications/Notifications";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/player/:id",
        loader: ({ params }) =>
          fetch(`${process.env.REACT_APP_PORT}/player/${params.id}`),
        element: <Player />,
      },
      {
        path: "/notifications",
        element: <Notifications />,
      },
    ],
  },
]);

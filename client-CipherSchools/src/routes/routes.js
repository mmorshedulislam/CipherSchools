import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../layouts/Main";
import Player from "../Pages/Player/Player";
import Notifications from "../Pages/Notifications/Notifications";

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

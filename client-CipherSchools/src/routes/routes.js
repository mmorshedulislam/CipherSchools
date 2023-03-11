import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
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
        element: <Home />,
      },
      {
        path: "/player/:id",
        loader: ({ params }) =>
          fetch(`https://server-cipher-schools.vercel.app/player/${params.id}`),
        element: <Player />,
      },
    ],
  },
]);

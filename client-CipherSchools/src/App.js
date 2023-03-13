import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { Toaster } from "react-hot-toast";
import APIProvider from "./Contexts/APIProvider/APIProvider";

function App() {
  return (
    <>
      <APIProvider>
        <RouterProvider router={router} />
        <Toaster />
      </APIProvider>
    </>
  );
}

export default App;

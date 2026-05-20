import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Landingpage, Watchlist, Funddetail } from "./pages/index.jsx";
import "./index.css";
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Landingpage />,
      },
      {
        path: "/watchlist",
        element: <Watchlist />,
      },
      {
        path: "/fund/:schemeCode",
        element: <Funddetail />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

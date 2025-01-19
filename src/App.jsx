import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./ui/Home";
import Blog from "./ui/Blog";
import About from "./ui/About";
import Link from "./ui/Link";
import AppLayout from "./utils/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/link",
        element: <Link />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

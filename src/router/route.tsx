import { createBrowserRouter } from "react-router-dom";
import { ErrorPage, HomePage, LoginPage, Root } from "../pages";
import Dashboard from "../layout/dashboard";

const routes = createBrowserRouter([
  { path: "/dashboard", element: <Dashboard />, errorElement: <ErrorPage /> },
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
    ],
  },
]);

export default routes;

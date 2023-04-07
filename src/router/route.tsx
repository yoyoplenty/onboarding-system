import { createBrowserRouter } from "react-router-dom";
import { DashboardPage, ErrorPage, LoginPage, ProfilePage, UsernamePage } from "../pages";
import { DashboardLayout, RootLayout } from "../layout";

const routes = createBrowserRouter([
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: "profile", element: <ProfilePage /> },
    ],
  },
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <UsernamePage /> },
      { path: "login", element: <LoginPage /> },
    ],
  },
]);

export default routes;

import { createBrowserRouter } from "react-router-dom";
import { DashboardPage, ErrorPage, LoginPage, PasswordPage, ProfilePage, RecoveryPage, RegisterPage, ResetPage, UsernamePage } from "../pages";
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
      { path: "register", element: <RegisterPage /> },
      { path: "password", element: <PasswordPage /> },
      { path: "recovery", element: <RecoveryPage /> },
      { path: "reset", element: <ResetPage /> },
    ],
  },
]);

export default routes;

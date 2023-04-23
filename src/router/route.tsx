import { createBrowserRouter } from "react-router-dom";
import {
  DashboardPage,
  ErrorPage,
  HomePage,
  LoginPage,
  ForgotPage,
  ProfilePage,
  RecoveryPage,
  RegisterPage,
  ResetPage,
  UserProfilePage,
} from "../pages";
import { DashboardLayout, RootLayout } from "../layout";

const routes = createBrowserRouter([
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: "profile", element: <UserProfilePage /> },
    ],
  },
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "forgot", element: <ForgotPage /> },
      { path: "recovery", element: <RecoveryPage /> },
      { path: "reset", element: <ResetPage /> },
      { path: "profile", element: <ProfilePage /> },
    ],
  },
]);

export default routes;

import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Profile from "../Components/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "login", Component: Login },
      { path: "signUp", Component: SignUp },
      {
        path: "profile",
        element: (
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
export default router;

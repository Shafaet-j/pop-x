import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home/Home/Home";
import Landing from "../page/Home/Landing/Landing";
import SignIn from "../page/SignIn/SignIn";
import SignUp from "../page/SignUp/SignUp";
import Main from "../Layout/Main";
import AccountSetting from "../page/AccountSetting/AccountSetting";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/setting",
        element: <AccountSetting></AccountSetting>,
      },
    ],
  },
]);

export default router;

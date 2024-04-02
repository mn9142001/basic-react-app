import { createBrowserRouter, RouteObject } from "react-router-dom";
import Login from "./auth/login";
import SignUp from "./auth/signup";
import HomePage from "./home";


const routes : Array<RouteObject> = [
    {
      path : "/login/",
      Component : Login,
    },
    {
      path : "/signup/",
      Component : SignUp,
    },
    {
      path : "*",
      Component : HomePage,
    },
  ]
  
export  const router = createBrowserRouter(routes);

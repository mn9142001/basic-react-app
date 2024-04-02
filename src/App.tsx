import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { createBrowserRouter, RouteObject, RouterProvider } from "react-router-dom"
import Login from "./auth/login";
import SignUp from "./auth/signup";

const queryClient = new QueryClient()


const routes : Array<RouteObject> = [
  {
    path : "/login/",
    Component : Login,
  },
  {
    path : "/signup/",
    Component : SignUp,
  },
]

const router = createBrowserRouter(routes);

const App = () => {

  return (

    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from './component/Root/Root'
import Home from './component/main/Home/Home'
import Users from './component/main/Users/Users'
import UserDetails from './component/main/Users/UserDetails'
import PricingOptions from './component/main/pricingOptions/PricingOption';
import App from './App';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      {
        path: "users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users,
      },
      {
        path: "users/:userID",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userID}`),
        Component: UserDetails,
      },
      {
        path: "services",
        element: <App></App>
      },
      {
        path: "*",
        element: (
          <div className="text-9xl text-center py-10">404: Not Found</div>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <div className="text-9xl text-center py-10">404: Not Found</div>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)

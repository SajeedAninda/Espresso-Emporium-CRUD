import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from './Components/Homepage.jsx';
import AddCoffee from './Components/Products/AddCoffee.jsx';
import UpdateCoffee from './Components/Products/UpdateCoffee.jsx';
import CoffeeDetails from './Components/Products/CoffeeDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
      },
      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/updateCoffee/:id",
        loader: ({ params }) => fetch(`https://cofee-server.vercel.app/coffees/${params.id}`),
        element: <UpdateCoffee></UpdateCoffee>,
      },
      {
        path: "/coffeeDetails/:id",
        loader: ({ params }) => fetch(`https://cofee-server.vercel.app/coffees/${params.id}`),
        element: <CoffeeDetails></CoffeeDetails>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

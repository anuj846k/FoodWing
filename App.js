import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";

//no key(not acceptable)<<<<<<<< index as a key <<<<<<<<<<<<<<unique id (most recommeded)


const Applayout = () => {
  return (
    <div className="app">
      <Header/>
      <Outlet/>
    </div>
  );
};

//Routing in react is done using react-router-dom//

const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<Applayout/>,
    children:[
      {
        path:'/',
        element:<Body/>,
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/restaurants/:resId',
        element:<RestaurantMenu/>
      }
    ],
    errorElement:<Error/>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);

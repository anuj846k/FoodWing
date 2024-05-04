import React, { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
// import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import Shimmer from "./src/components/Shimmer";
// import Grocery from "./src/components/Grocery";  

//no key(not acceptable)<<<<<<<< index as a key <<<<<<<<<<<<<<unique id (most recommeded)


/*
As we grow our app ,we need to split our code into smaller chunks and load them only when needed,
otherwise the app will be slow to load.
*/
//chunking
//Dynamic Bundling
// Code splitting
//Lazy loading or on demand loading 


  
// This is called dynamic import not traditional funciton⬇️

const Grocery=lazy(()=>
  import("./src/components/Grocery")
)  


const About=lazy(()=>
import ("./src/components/About"))

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
        path:'/grocery',
        element:<Suspense fallback={<Shimmer/>}>
          <Grocery/>
        </Suspense>,
      },
      {
        path:'/about',
        element:<Suspense fallback={<Shimmer/>}><About/></Suspense>
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

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";

//no key(not acceptable)<<<<<<<< index as a key <<<<<<<<<<<<<<unique id (most recommeded)


const Applayout = () => {
  return (
    <div className="app">
      <Header/>
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout />);

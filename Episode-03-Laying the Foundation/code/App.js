import React from "react";
import ReactDOM from "react-dom/client";

// babel is js complier that convert jsx to React elements.
// Jsx is not html it look like html
// jsx => Babel transpiles it to React.createElement => ReactElement =>Js object =>HtmlElement(render)

const Firstcomponent = ()=>(
  <h1>Hello from first component 🐱‍🏍</h1>
)



//react functional component

//components composition(Components inside components)

const Secondcomponent = ()=>(
  <div id="container">
    {Firstcomponent()}
    <Firstcomponent/>
    <Firstcomponent></Firstcomponent>
    <h2>{200+2303}</h2>
    <h1>Cheers from second component 🔥</h1>
  </div>
)   


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Secondcomponent/>);

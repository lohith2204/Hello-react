import React from "react";
import ReactDOM from "react-dom/client";
// React Element
const heading = (
<h1 className="head" tabIndex="5">
Namaste React using JSX
</h1>
);
// React Functional Component
const HeadingComponent = () =>(
<div id="container">
<h1 className="heading">Namaste React Fucntional Component</h1>
</div>
)
const root = ReactDOM.createRoot (document.getElementById("root"));
root.render(<HeadingComponent/>);
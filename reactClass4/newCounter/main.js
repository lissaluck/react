import React from "react";
// Same thing as var React = require("react");
import ReactDOM from "react-dom";
import Counter from "./components/Counter";

class App extends React.Component{

    render(){
        return (
            <Counter/>
        )
    }

}


ReactDOM.render(<App/>, document.getElementById("app"));

import React, {Component} from "react";
import ReactDOM from "react-dom";
import {observer} from "mobx-react";
import store from "./store/store";
import Button from "./components/Button";
@observer
class App extends Component {

    render() {
        return (
            <div>
                <h1>{store.count}</h1>
                <h1>double: {store.double}</h1>
                <Button buttonText="-"
            </div>


        )
    }
}


ReactDOM.render(<App/>, document.getElementById("app"));
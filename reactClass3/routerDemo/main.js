import React, { Component } from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router";

import Wrapper from "./components/Wrapper";
import HomeContainer from "./containers/HomeContainer";
import AboutUsContainer from "./containers/AboutUsContainer";
import ContactUsContainer from "./containers/ContactUsContainer";

// import List from "./components/List"

class App extends Component {

    render() {

        return (

            <Router history={hashHistory}>
                <Route path="/" component={Wrapper}>
                    <IndexRoute component={HomeContainer} />
                    <Route path="home" component={HomeContainer} />
                    <Route path="about" component={AboutUsContainer} />
                    <Route path="contact" component={ContactUsContainer} />
                </Route>
            </Router>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById("app"));
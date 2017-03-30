import React from "react";
// Same thing as var React = require("react");
import ReactDOM from "react-dom";

let styles = {
    buttonStyle: {
        backgroundColor: "lavender",
        margin: 10
    }
}

export default class Counter extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }
    
    increment(){
        let newCount = this.state.count + 1;
        this.setState({count: newCount});
    }
    
    decrement(){
        let newCount = this.state.count - 1;
        this.setState({count: newCount});
    }
    
    render(){
        return (
            <div>
                <button style={styles.buttonStyle} onClick={this.decrement.bind(this)}>-</button>
                <button style={styles.buttonStyle} onClick={this.increment.bind(this)}>+</button>
                <h1>{this.state.count}</h1>
            </div>
        )
    }
    
}

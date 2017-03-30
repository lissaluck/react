import React, {Component} from "react";
import ReactDOM from "react-dom";
import TextInput from "./components/TextInput";
import List from "./components/List";

const styles = {
    appContainerStyle: {
        // display: "flex",
        // justifyContent: "space=around",
        textAlign: "center"
    }
}

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: ["Wash dishes", "Pick up my crap"]
        }
    }

    handleAddTask = (newTask) => {
        let tasks = this.state.tasks;
        tasks.push(newTask);
        this.setState({tasks});
    }

    handleDeleteTask = (taskIndex) => {
        let tasks = this.state.tasks;
        tasks.splice(taskIndex, 1);
        this.setState({tasks});
    }

    render() {

        console.log(this.state);

        return (
            <div style = {styles.appContainerStyle}>
                <h1>Yet Another Todo App!</h1>
                <TextInput placeholder="Buy milk!" submitInput={this.handleAddTask}/>
                <List items={this.state.tasks} deleteItem={this.handleDeleteTask} />
            </div>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById("app"));
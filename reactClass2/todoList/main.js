import React, {Component} from "react";
import ReactDOM from "react-dom";
import List from "./components/List";
import TaskInput from "./components/TaskInput"

// Create a component that displays "Hello World!" (or any other text) on the screen;
// run 'npm start' to run the application and then go to localhost:8080 to view it

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: ["Wash dishes", "Buy Milk", "Walk dog", "Pick up kids"]
        }
    }

    handleAddNewTask = (newTask)=> {
        let tasks = this.state.tasks;
        this.state.tasks.push(newTask);
        this.setState({tasks: this.state.tasks});
    }

    handleDeleteTask = (taskIndex) =>{
        let tasks = this.state.tasks;
        tasks.splice(taskIndex, 1);
        this.setState({tasks: tasks});
        }


    render() {

        return (
            <div>
                <h1>My React To-Do List</h1>
                <TaskInput addTask = {this.handleAddNewTask} />
                <List list = {this.state.tasks} deleteTask={this.handleDeleteTask} />
            </div>
        )
    }

}

ReactDOM.render(<App />, document.getElementById("app"));
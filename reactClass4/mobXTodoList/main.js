import React, {Component} from "react";
import ReactDOM from "react-dom";
import MobXDevTools from "mobx-devtools";
import {observer} from "mobx-react";
import store from "./store/store";
import TextInput from "./components/TextInput";
import List from "./components/List";

@observer
class App extends Component {

    renderPeeps() {
        if (store.starPeeps.length)
            return (
                store.starPeeps.map((peep, index) => (
                    <h3 key={index}>{peep.name}</h3>
                ))
            )
    }

    render() {
        return (
            <div>
                <MobXDevTools />
                <TextInput placeholder="Add new to-do" submitText={store.addTask}/>
                <List list={store.taskList} />
                <button onClick={store.getPeeps}>Get Star Peeps</button>
                {this.renderPeeps()}
        </div>
    )
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));
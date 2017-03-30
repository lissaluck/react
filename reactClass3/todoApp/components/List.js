import React, {Component} from "react";

export default class List extends Component {

    deleteItem = (e) => {
        let index = e.target.id;
        this.props.deleteItem(index);
    }


    render() {

        var itemList = this.props.items.map((item, index) => (
            <li key={index}>
                {item}
                <button id={index} onClick={this.deleteItem}>X</button>
            </li>
        ))

        return (
            <ul>
                {itemList}
            </ul>
        )
    }

}


/**
 * Created by lissaluck on 3/27/17.
 */

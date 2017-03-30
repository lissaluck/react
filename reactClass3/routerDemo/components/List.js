import React, {Component} from "react";

var people = ["Tanner", "Miriam", "Melissa", "Bob"];

export default class List extends Component {

    render() {
        let list = people.map((person, index) => (
            <li key={index}>{ person }</li>
        ))


        return (
            <ul>
                {list}
            </ul>
        )
    }

}


/**
 * Created by lissaluck on 3/27/17.
 */

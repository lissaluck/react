import React, {Component} from "react";

export default class Wrapper extends Component {

    render() {

        console.log(this.props.children);

        return (
            <div>
                <h1>This is the Wrapper</h1>
                {this.props.children}
            </div>
        )
    }

}


/**
 * Created by lissaluck on 3/27/17.
 */

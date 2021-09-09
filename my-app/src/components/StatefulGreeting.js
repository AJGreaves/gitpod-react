import React from "react";

class StatefulGreeting extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            /* Inital state */
            intro: "Hello!",
            btnTxt: "Exit",
        };
    }

    handleClick() {
        this.setState({
            intro: "Goodbye!",
            btnTxt: "Enter",
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.intro} {this.props.name}, {this.props.greeting}</h1>
                <button onClick={() => this.handleClick()}>{this.state.btnTxt}</button>
            </div>
        );
    }
}

export default StatefulGreeting
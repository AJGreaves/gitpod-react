import React from "react";

class StatefulGreetingWithCallback extends React.Component {

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
        }, ()=> {
            /* Use callback function after setState when dealing with 
            code that relies on the state being changed. */
            console.log('new state: ', this.state.intro);
            console.log('new state: ', this.state.btnTxt);
        });
        /* Don't call code here that relies on the state being changed */
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

export default StatefulGreetingWithCallback
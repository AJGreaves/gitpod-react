import React from "react";

class StatefulGreetingWithPrevState extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            /* Inital state */
            intro: "Hello!",
            btnTxt: "Exit",
            count: 0,
        };
    }

    increment() {
        this.setState((prevState, prevProps) => {
            console.log("prev state: ", prevState);
            console.log("prev props: ", prevProps);
            return { 
                count: prevState.count + 1
            }
        })
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
            return {
                intro: prevState.intro === "Hello!" ? "Goodbye!": "Hello!",
                btnTxt: prevState.btnTxt === "Exit" ? "Enter" : "Exit",
            }
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.intro} {this.props.name}, {this.props.greeting}</h1>
                <button onClick={() => this.handleClick()}>{this.state.btnTxt}</button>
                <button onClick={() => this.increment()}>Count: {this.state.count}</button>
            </div>
        );
    }
}

export default StatefulGreetingWithPrevState
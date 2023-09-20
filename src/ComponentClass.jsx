import { Component } from "react";

export default class ComponentClass extends Component {
    constructor(props) {
        super(props);
        console.log("constructor");
        this.state = {
            count: 0,
        };
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.myVar = setInterval(() => {
            console.log("bop");
        }, 1000);
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
        clearInterval(this.myVar);
    }

    render() {
        console.log("render");
        return (
            <>
                <div>ComponentClass</div>
                <div>{this.state.count}</div>
                <h2>{this.state.person}</h2>
                <button
                    onClick={() =>
                        this.setState({ count: this.state.count + 1 })
                    }
                >
                    Change State
                </button>
            </>
        );
    }
}

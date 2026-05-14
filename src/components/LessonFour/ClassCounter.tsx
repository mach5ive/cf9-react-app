import {Component} from "react";
import CounterButton from "./CounterButton.tsx";
type State = {count: number}

class ClassCounter extends Component<object, State> {
    constructor(props: object) {
        super(props);
        this.state = {count: 0}
    }

    increaseCount= () => {
        this.setState({count: this.state.count + 1});
    }

    render() {
        return(
            <>
                <h1>Count is {this.state.count}</h1>
                <div>
                <CounterButton
                    onClick={this.increaseCount}
                    label="Increase Count"
                />
                </div>
            </>
        )
    }
}
export default ClassCounter;
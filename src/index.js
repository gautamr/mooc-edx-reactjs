import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {count: 0}
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {
        this.setState({count: this.state.count + 1})
    }
    render() {
        return <button onClick={this.clickHandler}> {this.state.count}</button>
    }
}

ReactDOM.render(
    <Counter/>,
    document.getElementById("root")
)
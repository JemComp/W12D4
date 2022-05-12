import React from "react";

class BenchIndexItem extends React.Component{

    constructor(props) {
        super(props)
    }

    render() {
        return  (
            <li >
                <p>{this.props.bench.id} </p>
                <p>{this.props.bench.description} </p>
                <p>{this.props.bench.lat} </p>
                <p>{this.props.bench.lng} </p>
            </li>
        )
    }
}

export default BenchIndexItem
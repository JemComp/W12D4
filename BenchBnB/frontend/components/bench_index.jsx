import React from "react";
// import { fetchBenches } from "../actions/bench_actions";
import BenchIndexItem from "./bench_index_item";


class BenchIndex extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchBenches();
    }

    render() {
        console.log(this.props)
        if (Object.values(this.props.benches).length === 0 ) {
            return <h1>loading...</h1>
        }
        return (
            <div>
                <ul>
                    {Object.values(this.props.benches).map((bench) => (
                        <BenchIndexItem key={bench.id} bench={bench}/>))
                    }
                </ul>
            </div>
        )
    }
}

export default BenchIndex
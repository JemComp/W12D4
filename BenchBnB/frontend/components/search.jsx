import React from "react";
import BenchIndex from "./bench_index";
import BenchMap from "./bench_map";

export const Search = (props) => {

    // console.log(props)
    return (
        <div>
            <BenchMap/>
            <BenchIndex fetchBenches={props.fetchBenches} benches={props.benches}/>
        </div>
    )
}
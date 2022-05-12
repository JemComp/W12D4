import * as benchApiUtil from "../util/bench_api_util";

export const RECEIVE_BENCHES = "RECEIVE_BENCHES"
//returns an array currently
export const receiveBench = (benches) => {
    return {
        type: RECEIVE_BENCHES,
        benches
    }
}

export const fetchBenches = () => dispatch => (
    
    benchApiUtil.fetchBenches()
        .then(benches => dispatch(receiveBench(benches)))
)
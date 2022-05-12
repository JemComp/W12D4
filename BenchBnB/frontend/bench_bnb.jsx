import React from 'react';
import ReactDOM from 'react-dom';
import { login } from './actions/sessions_actions';
import Root from './components/root';
import configureStore from './store/store';
import * as SessionApiUtil from './util/session_api_util';
// import * as benchApiUtil from './util/bench_api_util'
import { fetchBenches } from './actions/bench_actions';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let preloadedState = undefined;
    if (window.currentUser) {
        preloadedState = {
            entities: {
                users: {[window.currentUser.id]: window.currentUser}
            },
            session: {
                id: window.currentUser.id
            }
        }
    }
    const store = configureStore(preloadedState);
    window.store = store;
    window.dispatch = store.dispatch
    window.getState = store.dispatch
    window.login = login;
    window.fetchBenches = fetchBenches;
    ReactDOM.render(<Root store={store} />, root);
})
import React from "react";
import { Link } from "react-router-dom";

class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }
    
    handleLogout(e) {
        e.preventDefault();
        this.props.logout();
    }

    render() {
        return this.props.currentUser ? (
            <div>
                <p>Hello { this.props.currentUser.username }</p>
                <button onClick={this.handleLogout}>Logout</button>
            </div>
        ) :
        (
            <div>
                <Link to='/signup'>Sign up</Link>
                <br/>
                <Link to='/login'>Log in</Link>
            </div>
        );
    }
}

export default Greeting;
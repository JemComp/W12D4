import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    handleChange(type) {
        return (e) => {
            this.setState({
                [type]: e.target.value
            });
        }
    }
    
    render() {
        if(this.props.currentUser) {
            this.props.history.push('/');
            return;
        }
        return (
            <div>
                <h2>{this.props.formType === "login" ? "Log in" : "Sign up"}</h2>
                <Link to={this.props.formType === "login" ? "/signup" : "/login"}>
                    {this.props.formType === "login" ? "Sign up" : "Log in"}
                </Link>
                <form onSubmit={this.handleSubmit}>
                    <label>Username:
                        <input type="text" value={this.state.username} onChange={this.handleChange("username")}/>
                    </label>

                    <label>Password:
                        <input type="password" value={this.state.password} onChange={this.handleChange("password")} />
                    </label>
                    <button>Submit</button>
                
                </form>
                <ul>
                    {this.props.errors.map((error, index) => {
                        return <li key={index}>{error}</li>
                    })}
                </ul>
            </div>
        );  
    }
}

export default SessionForm;
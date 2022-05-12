import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { login } from "../actions/sessions_actions";
import SessionForm from "./session_form";

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: 'login',
        currentUser: state.entities.users[state.session.id]
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        processForm: (user) => dispatch(login(user))
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
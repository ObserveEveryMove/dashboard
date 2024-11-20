import React from "react";
import { connect } from "react-redux";

import Login from "./Login"
import Registration from "./Registration";

const Landing = (props) => {
    return (

        <div>
           
            {props.loginForm ?
                <Login /> :
                <Registration />
            }
        </div>

    )
}
const mapStateToProps = ({ login }) => {
    return {
        loginForm: login.loginForm,
    }
}

export default connect(mapStateToProps, null)(Landing) 
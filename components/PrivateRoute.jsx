import React from "react";
import { connect } from "react-redux";
import { Outlet, Navigate } from "react-router-dom"


const PrivateRoute = (props) => {
    return props.isAuth ? <Outlet /> : <Navigate to="/" />
}

const mapStateToProps = ({ login }) => {
    return {
        isAuth: login.isAuth,
    }
}

export default connect(mapStateToProps, null)(PrivateRoute) 
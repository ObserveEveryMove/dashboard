import React from "react"

import { connect } from "react-redux"

import * as actions from "../redux/actions"

import image1 from "../data/react-javascript-library-angularjs-github-native-b35cad5871a47cedbb1c695c98deac4a.png"




class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.handleLogin = this.handleLogin.bind(this)
        this.handleRegister = this.handleRegister.bind(this)
    }

    componentDidMount() {
        // console.log(localStorage.getItem('usersDB'));
        this.props.getUsersDB()
        this.props.checkAuth()

    }


    handleLogin(e) {
        e.preventDefault()
        this.props.login()
    }

    handleRegister(e) {
        e.preventDefault()
        this.props.register()

    }

    render() {

        return (
            <div className="loginOuter">

                    

                    <h1 className="logOutGreeting">{this.props.greeting}</h1>
                

                <div className="loginLanding">


                    <h1>Login</h1>
                    <form
                        className="loginForm"
                        onSubmit={this.handleLogin}>

                        <input
                            className="loginInput"
                            onInput={this.props.handleInput}
                            value={this.props.username}
                            name='username'
                            type="text"
                            placeholder='username'
                            required
                        />

                        <input
                            className="loginInput"
                            onInput={this.props.handleInput}
                            value={this.props.password}
                            name="password"
                            type="password"
                            placeholder="password"
                            required
                        />

                        <button
                            className="logInBtn"
                            type="submit">Log In</button>

                    </form>


                    <h2 className="error">{this.props.errorMessage}</h2>

                    <h1>Not signed up?</h1>
                    <button
                        className="logInBtn"
                        onClick={this.props.toggleForm}>Register</button>

<div
                className='profileCards'>
                    <h3>Powered by:</h3>
                <img 
                className='image1'
                alt='reactLogo'
                src={image1} />
            </div>

                </div> 

            </div>
        )
    }
}

const mapStateToProps = ({login}) => {
    return {
        isAuth: login.isAuth,
        username: login.username,

        password: login.password,
        checkPassword: login.checkPassword,
        passwordReg: login.passwordReg,

        loginForm: login.loginForm,
        firstName: login.firstName,
        lastName: login.lastName,

        email: login.email,
        emailReg: login.emailReg,

        errorMessage: login.errorMessage,
        loginBtn: login.loginBtn,

        greeting: login.greeting,

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        login: () => dispatch(actions.login()),
        register: () => dispatch(actions.register()),
        toggleForm: () => dispatch(actions.toggleForm()),
        handleInput: (e) => dispatch(actions.handleInput(e.target)),
        getUsersDB: () => dispatch(actions.getUsersDB()),
        checkAuth: () => dispatch(actions.checkAuth()),

    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Login)

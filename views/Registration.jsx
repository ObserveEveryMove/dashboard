import React from "react"

import { connect } from "react-redux"

import * as actions from "../redux/actions"

import image1 from "../data/react-javascript-library-angularjs-github-native-b35cad5871a47cedbb1c695c98deac4a.png"
class Registration extends React.Component {
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
        // {console.log(this.props.emailSignUp)}
        return (

            <div className="registrationPage">

                <h1>Register with us</h1>

                <fieldset className="registrationOuter">
                    <form
                        className="registrationForm"
                        onSubmit={this.handleRegister}>

                        <input
                            className={this.props.nameReg.test(this.props.firstName) ? "confirmed" : "confirm"}
                            onInput={this.props.handleInput}
                            value={this.props.firstName}
                            name='firstName'
                            type="text"
                            placeholder='First Name'
                            required
                        />


                        <input
                            className={this.props.nameReg.test(this.props.lastName) ? "confirmed" : "confirm"}
                            onInput={this.props.handleInput}
                            value={this.props.lastName}
                            name='lastName'
                            type="text"
                            placeholder='Last Name'
                            required
                        />

                        <input
                            className={this.props.emailReg.test(this.props.email) ? "confirmed" : "confirm"}
                            onInput={this.props.handleInput}
                            value={this.props.email}
                            name='email'
                            type="text"
                            placeholder='email@email.com'
                            required
                        />

                        <input
                            className={this.props.usernameReg.test(this.props.username) ? "confirmed" : "confirm"}
                            onInput={this.props.handleInput}
                            value={this.props.username}
                            name='username'
                            type="text"
                            placeholder='UserName'
                            required
                        />

                        <input
                            className={this.props.passwordReg.test(this.props.password) ? "confirmed" : "confirm"}
                            onInput={this.props.handleInput}
                            value={this.props.password}
                            name='password'
                            type="password"
                            placeholder='Password'
                            required
                        />

                        <input
                            className={this.props.password === this.props.checkPassword && this.props.passwordReg.test(this.props.password) ? "confirmed" : "confirm"}
                            onInput={this.props.handleInput}
                            value={this.props.checkPassword}
                            name='checkPassword'
                            type="password"
                            placeholder='Confirm Password'
                            required
                        />

                        <div className="newsLetter">
                            <label>Subscribe to newsletter?</label>
                            <input
                                className="checkBox"
                                onChange={this.props.handleInput}
                                type="checkbox"
                                name="emailSignUp"
                                value={this.props.emailSignUp} />
                        </div>



                        <button
                            className="logInBtn"
                            type="submit">Register </button>

                    </form>
                </fieldset>
                <div
                className='profileCards'>
                    <h3>Powered by:</h3>
                <img 
                className='image1'
                alt='reactLogo'
                src={image1} />
            </div>

                <h2 className="error">{this.props.errorMessage}</h2>

                {this.props.loginBtn &&
                    <button
                        className="logInBtn"
                        onClick={this.props.toggleForm}>
                        Login?</button>}

            </div>
        )
    }
}

const mapStateToProps = ({ login }) => {
    return {
        isAuth: login.isAuth,

        username: login.username,
        usernameReg: login.usernameReg,

        password: login.password,
        checkPassword: login.checkPassword,
        passwordReg: login.passwordReg,

        loginForm: login.loginForm,

        firstName: login.firstName,
        lastName: login.lastName,
        nameReg: login.nameReg,

        email: login.email,
        emailReg: login.emailReg,

        emailSignUp: login.emailSignUp,

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


export default connect(mapStateToProps, mapDispatchToProps)(Registration)

import React from 'react'
import { connect } from "react-redux";
import { Link, Outlet } from "react-router-dom"
import * as actions from '../redux/actions'

import image1 from "../data/react-javascript-library-angularjs-github-native-b35cad5871a47cedbb1c695c98deac4a.png"

import image2 from "../data/github-computer-icons-logo-github-62fd3c7c3a269c87f820dd047bfeae45.png"

import image3 from "../data/blue-trademark-angle-area-linkedin-9518894a67f1bf2d25fce21b31279b6d.png"

const Profile = (props) => {
    return (
        <div>

            {/* <label class="hamburger-menu">
                <input type="checkbox" />
            </label>
            <aside class="sidebar">
                <nav>
                    <div>This</div>
                    <div>Is</div>
                    <div>The</div>
                    <div>Sidebar</div>
                </nav>
            </aside> */}


            <div className={props.greeting ? 'profileCards' : "hide"}>
                <h4 className='
fas fa-lock'>{props.greeting}</h4>

            </div>


            <div className={props.emailDisp ? 'profileCards' : "hide"}>

                <h4 className='
fas fa-envelope-square'>Newsletter: {props.emailDisp}</h4>
                {props.emailDisp === "❌" &&
                    <button
                        className='logOutBtn'
                        onClick={props.changeEmail}
                    >sign up?</button>}
            </div>



            {props.nightMode && <div className='profileCards'>
                <h4 className='fas'>Mode:</h4>
                <button onClick={props.handleDay} className='nightBtns fas fa-cloud-moon'></button>
            </div>}

            {!props.nightMode && <div className='profileCards'>
                <h4 className='fas'>Mode:</h4>
                <button onClick={props.handleNight} className='nightBtns fas'>☀</button>
            </div>}

            <div className='profileCards'>
                <h4 className='fas'>Theme:</h4>
                <button
                    className='nightBtns fas fa-cog'
                    onClick={!props.nightMode ? props.handleTheme : null}
                ></button>
            </div>

            <div className='profileCards logOutCard'>
                <button
                    className='logOutBtn'
                    onClick={props.logout}>log out</button>
            </div>

            <div
                className='profileCards'>
                <h4 className='fas'>Powered by:</h4>
                <img
                    className='image1'
                    alt='reactLogo'
                    src={image1} />
            </div>


            <div className='profileCards'>
                <div className='navLinks'>
                    <h4 className='fas'>Projects:</h4>
                    <Link to={"/pom"} className='profileLinks'>Pomodoro Clock</Link>
                    <Link to={"/magic"} className='profileLinks'>Magic Eight Ball</Link>
                    <Link to={"/quote"} className='profileLinks'>Random Quote</Link>
                    <Link to={"/drum"} className='profileLinks'>Drum Machine</Link>
                    <Link to={"/todo"} className='profileLinks'>Todo List</Link>



                </div>
            </div>



            <div
                className='profileCards'>
                <h4 className='fas'>GitHub:</h4>
                <img
                    className='image1'
                    alt='GitHub'
                    src={image2} />
            </div>

            <div
                className='profileCards'>
                <h4 className='fas'>Linked</h4>
                <img
                    className='image1'
                    alt='GitHub'
                    src={image3} />
            </div>

            <Outlet />
        </div>
    )
}

const mapStateToProps = ({ login }) => {
    return {

        username: login.username,
        firstName: login.firstName,
        lastName: login.lastName,
        email: login.email,
        greeting: login.greeting,
        emailDisp: login.emailDisp,

        nightMode: login.nightMode,


    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(actions.logout()),
        changeEmail: () => dispatch(actions.changeEmail()),

        handleNight: () => dispatch(actions.handleNight()),
        handleDay: () => dispatch(actions.handleDay()),

        handleTheme: () => dispatch(actions.handleTheme()),

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile);
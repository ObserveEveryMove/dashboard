import React from 'react'
import { connect } from "react-redux";
import { Link, Outlet } from "react-router-dom"

import image1 from "../data/react-javascript-library-angularjs-github-native-b35cad5871a47cedbb1c695c98deac4a.png"

const NavBar = () => {
    return (
        <div className='navOuter'>
            <div className='navBar'>
                {/* <h2>Projects:</h2> */}
                <Link to={"/pom"} className='dashA'>Pomodoro Clock</Link>
                <Link to={"/magic"} className='dashA'>Magic Eight Ball</Link>
                <Link to={"/quote"} className='dashA'>Random Quote</Link>
                <Link to={"/drum"} className='dashA'>Drum Machine</Link>
                <Link to={"/todo"} className='dashA'>Todo List</Link>
                <Link to={"/dashboard"} className='dashA'>Home</Link>


                <h3 className='navText'>Powered by:</h3>
                <img
                    className='image1'
                    alt='reactLogo'
                    src={image1} />
             
            </div>

            <Outlet />
        </div>
    )
}

// const mapStateToProps = ({ login }, { pom }) => {
//     //    console.log(state.username)
//     return {

//         username: login.username,
//         firstName: login.firstName,
//         lastName: login.lastName,
//         email: login.email,
//         greeting: login.greeting,
//         emailDisp: login.emailDisp,

//         nightMode: login.nightMode,


//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         logout: () => dispatch(actions.logout()),
//         changeEmail: () => dispatch(actions.changeEmail()),
//         handleNight: () => dispatch(actions.handleNight()),
//     }
// }


export default connect(null, null)(NavBar);
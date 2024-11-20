
import React from "react"

import { connect } from "react-redux"

import MagicEightBall from "../components/MagicEightBall"
import Pomodoro from "../components/Pomodoro"
import Profile from "../components/Profile"
import Quote from "../components/Quote"
import Drum from "../components/Drum"

const DashBoard = (props) => {
    return (

        <div className={props.nightMode? "bgNight":"gridContainer"}>

            <div className="profile" style={props.nightMode?{ backgroundColor:"black"}:null}>
                <Profile />
            </div>

            <div className="cont1" style={props.nightMode?{ backgroundColor:"black"}:{ backgroundColor:props.color}}>
                <Pomodoro />
            </div>

            <div className="cont2" style={props.nightMode?{ backgroundColor:"black"}:{ backgroundColor:props.color}}>
                <Quote />
            </div>

            <div className="cont3" style={props.nightMode?{ backgroundColor:"black"}:{ backgroundColor:props.color2}}>
                <Drum/>
            </div>

            <div className="cont4" style={props.nightMode?{ backgroundColor:"darkSlateGrey"}:{ backgroundColor:props.color3}}>
                <MagicEightBall />
            </div>



        </div>

    )
}

const mapStateToProps = ({login}) => {
    return {
    nightMode: login.nightMode,
    color: login.color,
    color2: login.color2,
    color3: login.color3,

    }
}


export default connect(mapStateToProps, null)(DashBoard)

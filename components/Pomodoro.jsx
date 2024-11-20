import React from 'react'
import { connect } from "react-redux";
import * as actions from '../redux/actions'

import BottomBtns from "./pomodoroComps/BottomBtns"
import Break from "./pomodoroComps/Break"
import Session from "./pomodoroComps/Session"
import TimeDisplay from "./pomodoroComps/TimeDisplay"
import Vol from "./pomodoroComps/Vol"

import Settings from "./pomodoroComps/Settings"

const Pomodoro = (props) => {

    return (
       

            <div className={!props.nightMode ? "pomOuter" : "nightMode"} style={!props.nightMode ? { backgroundColor: props.color } : null}>


                <div className="settingsComp">
                    <button title="Settings" className={props.nightMode?"nightSettingsBtn fas fa-cog":"settingsBtn pomBtn fas fa-cog" } onClick={props.handleSettings}></button>
                </div>


                <div className={!props.timerActive ? "breakSessionDiv" : "hiddenButtons"}>
                    <Session />
                    <Break />
                </div>

                <TimeDisplay />

                <BottomBtns />

                <Vol />

                <Settings />
            </div>
        
    )

}

const mapStateToProps = ({pom}) => {
    return {
        timerActive: pom.timerActive,
        color: pom.color,
        altColor: pom.altColor,
        nightMode: pom.nightMode,
        easterEgg: pom.easterEgg,
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        handleSettings: () => dispatch(actions.handleSettings()),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pomodoro)
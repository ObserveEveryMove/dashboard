import { connect } from 'react-redux'
import Theme from "./Theme"

import { handleAlarm } from "../../redux/actions"

const Settings = (props) => {
    return (

        <div className='settingsCont'>

     
                {props.settings && <div className={props.nightMode? "nightModeSettingsOuter":'settingsOuter'}>
                    
                    <Theme/>
                    
            
                    {props.isAlarm ? (<button
                    title='Alarm Off'
                        onClick={props.handleAlarm}
                        className="alarmBtn">
                        🔊
                    </button>) :
                        (<button
                        title='Alarm On'
                            onClick={props.handleAlarm}
                            className="alarmBtn pomBtn">
                            🔇
                        </button>)}
                    
                    </div>}
                
           

        </div>

    )
}

const mapStateToProps = ({pom}) => {
    return {
        settings: pom.settings,
        isAlarm: pom.isAlarm,
        nightMode: pom.nightMode,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleAlarm: () => dispatch(handleAlarm()),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
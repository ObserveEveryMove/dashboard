import { connect } from 'react-redux'
import { workInc, workDec, reset } from "../../redux/actions"

const Session = (props) => {

    return (
        <div>
            <div   className="sessionOuter">
                <h1 className={props.nightMode?"workBreakNight":null}>Work</h1>

                <div className="sessionBtns">

                    <button 
                    onClick={props.workDec}
                    // hide buttons 
                    // className={!props.timerActive?"sessionDown pomBtn":"hide"}
                    className="sessionDown pomBtn"
                    >🔽</button>

                    <h2 className={props.nightMode?"workBreakNight":null}>{Math.floor(props.workTime/60)}:{props.workTime % 60 < 10? "0" + props.workTime % 60 : props.workTime % 60}</h2>

                    <button 
                    onClick={props.workInc}
                    // hide buttons
                    // className={!props.timerActive?"sessionUp pomBtn":"hide"}
                    className="sessionUp pomBtn"
                    >🔼</button>

                </div>


            </div>
        </div>
    )
}

const mapStateToProps = ({pom}) => {
    return {
        workTime: pom.workTime,
        timerActive: pom.timerActive,
        nightMode: pom.nightMode,
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        workInc: () => {dispatch(workInc());dispatch(reset())},
        workDec: () => {dispatch(workDec());dispatch(reset())},
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Session)
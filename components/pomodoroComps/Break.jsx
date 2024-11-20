import { connect } from 'react-redux'
import { breakInc, breakDec, reset } from "../../redux/actions"


const Break = (props) => {

    return (
        <div>
            <div className="breakOuter">
                <h1 className={props.nightMode?"workBreakNight":null}>Break</h1>

                <div className="breakBtns">

                    <button
                        onClick={props.breakDec}
                        // hide buttons
                        // className={!props.timerActive ? "breakDown pomBtn" : "hide"}
                        className="breakDown pomBtn"
                        >🔽</button>

                    <h2 className={props.nightMode?"workBreakNight":null}>{Math.floor(props.breakTime / 60)}:{props.breakTime % 60 < 10 ? "0" + props.breakTime % 60 : props.breakTime % 60}</h2>

                    <button
                        onClick={props.breakInc}
                        // hide buttons
                        // className={!props.timerActive ? "breakUp pomBtn" : "hide"}
                        className='breakUp pomBtn'
                        >🔼</button>

                </div>


            </div>
        </div>
    )
}


const mapStateToProps = ({pom}) => {
    return {
        breakTime: pom.breakTime,
        timerActive: pom.timerActive,
        nightMode: pom.nightMode,
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        breakInc: () => { dispatch(breakInc()); dispatch(reset()) },
        breakDec: () => { dispatch(breakDec()); dispatch(reset()) },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Break)

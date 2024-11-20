import * as types from "../types"

import alarm from "../../data/Alarm-clock- sound.mp3"


let initialState = {
    breakTime: 10,
    workTime: 10,
    timer: 0,
    isWork: true,
    volume: .5,
    timerActive: false,
    isAlarm: true,
    colors: ["green", "lightBlue", "dodgerBlue", "lightGreen", "gray", "gold", "orange", "seaGreen", "red", "tomato", "slateBlue", "violet", "mediumSeaGreen", "slateBlue", "lightGray"],
    color: "",
    altColor: {},
    nightMode: false,
    settings: false,
    easterEgg: false,
    counter: 0,
}

const pomReducer = (state = initialState, action) => {
    // console.log(state.settings)
    switch (action.type) {


        case types.DECREASE:
            return {
                ...state,
                timer: state.timer - 1
            }

        case types.SET_TIMER:
            return {
                ...state,
                timer: state.isWork ? state.workTime : state.breakTime
            }

        case types.SET_SESSION:
            return {
                ...state,
                isWork: !state.isWork,
            }

        case types.BREAKINC:
            return {
                ...state,
                breakTime: state.breakTime + 30,
                timer: state.isWork ? state.workTime : state.breakTime,
            }

        case types.BREAKDEC:
            if (state.breakTime < 30) {
                return {
                    ...state,
                    breakTime: 0,
                    timer: state.isWork ? state.workTime : state.breakTime
                }
            }
            else {
                return {
                    ...state,
                    breakTime: state.breakTime - 30,
                    timer: state.isWork ? state.workTime : state.breakTime
                }
            }

        case types.WORKINC:
            return {
                ...state,
                workTime: state.workTime + 30,
                timer: state.isWork ? state.workTime : state.breakTime,
            }

        case types.WORKDEC:
            if (state.workTime < 30) {
                return {
                    ...state,
                    workTime: 0,
                }
            }
            return {
                ...state,
                workTime: state.workTime - 30,
                timer: state.isWork ? state.workTime : state.breakTime,
            }

        case types.RESET:
            return {
                ...state,
                timer: state.workTime,
                isWork: true,
            }

        case types.FLIP_TIMER:
            return {
                ...state,
                timerActive: action.payload !== undefined ? action.payload : !state.timerActive
            }


        case types.HANDLE_ALARM:
            if (!state.isAlarm) {
                return {
                    ...state,
                    volume: .5,
                    isAlarm: action.payload !== undefined ? action.payload : !state.isAlarm,
                }
            }
            else {
                return {
                    ...state,
                    volume: 0,
                    isAlarm: action.payload !== undefined ? action.payload : !state.isAlarm,
                }
            }

        case types.ALARM:
            let audio1 = new Audio(alarm)
            audio1.volume = state.volume
            audio1.play()
            setTimeout(() => {
                audio1.pause()
            }, 2000)
            return {
                ...state,
            }

        case types.VOLUME:
            let { value } = action.payload
            if (state.volume < .03 && state.isAlarm === true) {
                return {
                    ...state,
                    volume: value / 100,
                    isAlarm: false,
                }
            } else {
                return {
                    ...state,
                    volume: value / 100,
                    isAlarm: true,
                }
            }

        case types.THEME:
            let colorPick = Math.floor(Math.random() * state.colors.length)
            state.color = state.colors[colorPick]
            let altColorPick = Math.floor(Math.random() * state.colors.length)
            state.altColor = state.colors[altColorPick]


            // easterEgg
            // if (state.color === state.altColor) {
            //     return {
            //         ...state,
            //         counter: state.counter + 1,
            //     }
            // }

            // if (state.counter === 2) {
            //     alert("Matched Color!!! Easter Egg!!! You WIN....NOTHING!!!")
            //     return {
            //         ...state,
            //         easterEgg: !state.easterEgg,
            //         counter: 0,
            //     }
            // }

            
            return {
                ...state,
                color: state.color,
                altColor: state.altColor,
            }


        case types.NIGHTMODE:
            return {
                ...state,
                nightMode: true,
            }

            case types.DAYMODE: 
            return {
                ...state,
                nightMode: false,
            }

        case types.SETTINGSMODAL:
            return {
                ...state,
                settings: !state.settings,
            }

        default:
            return state
    }
}

export default pomReducer
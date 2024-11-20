import * as types from './types'


// Login Register actions
export const getUsersDB = () => {
    return {
        type: types.GET_USERS_DB
    }
}

export const checkAuth = () => {
    return {
        type: types.CHECK_AUTH
    }
}

export const login = () => {
    return {
        type: types.LOGIN
    }
}

export const logout = () => {
    return {
        type: types.LOGOUT
    }
}

export const register = () => {
    return {
        type: types.REGISTER
    }
}

export const handleInput = (input) => {
    return {
        type: types.HANDLE_INPUT,
        payload: input
    }
}

export const toggleForm = () => {
    return {
        type: types.TOGGLE_FORM
    }
}

export const changeEmail = () => {
    return {
        type: types.CHANGE_EMAIL
    }
}




// Pom actions


export const decrease = () => {
    return {
        type: types.DECREASE
    }
}

export const breakInc = () => {
    return {
        type: types.BREAKINC
    }
}

export const breakDec = () => {
    return {
        type: types.BREAKDEC
    }
}

export const workInc = () => {
    return {
        type: types.WORKINC
    }
}

export const workDec = () => {
    return {
        type: types.WORKDEC
    }
}


export const reset = () => {
    return {
        type: types.RESET
    }
}

export const setTimer = () => {
    return {
        type: types.SET_TIMER
    }
}

export const setSession = () => {
    return {
        type: types.SET_SESSION
    }
}

export const flipTimer=(onOrOff)=>{
    return {
        type: types.FLIP_TIMER,
        payload:onOrOff,
    }
}

export const handleAlarm = (snooze) => {
    return {
        type: types.HANDLE_ALARM,
        payload: snooze,
    }
}

export const alarm = () => {
    return {
        type: types.ALARM,
    }
}

export const handleVolume = (e) => {
    return {
        type: types.VOLUME,
        payload:e
    }
}

export const handleTheme = () => {
    return {
        type: types.THEME,

    }
}

export const handleMode = () => {
    return {
        type: types.NIGHTMODE,
    }
}

export const handleSettings = () => {
    return {
        type: types.SETTINGSMODAL,
    }
}

// dual functions 


export const handleNight = () => {
    return {
        type: types.NIGHTMODE,
    }
}

export const handleDay = () => {
    return {
        type:types.DAYMODE,
    }
}
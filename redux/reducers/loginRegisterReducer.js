import * as types from "../types";

let initialState = {
    users: [],
    currentUser: null,
    isAuth: false,
    loginForm: true,
    errorMessage: null,

    loginBtn: false,
    firstName: "",
    lastName: "",
    email: "",
    emailSignUp: false,
    emailDisp: "",

    username: "",
    password: "",
    checkPassword: "",

    greeting: "",

    emailReg: /^([a-z\d]+)@([a-z\d-]+)\.([a-z]{2,8})/i,
    passwordReg: /^([a-z\d]{6,})$/i,
    usernameReg: /^([a-z\d]{1,10})$/i,
    nameReg: /^([a-z-.]{1,})$/i,

    nightMode: false,

    colors: ["green", "lightBlue", "dodgerBlue", "lightGreen", "gray", "gold", "orange", "seaGreen", "red", "tomato", "slateBlue", "violet", "mediumSeaGreen", "slateBlue", "lightGray"],
    color: "",
    color2: "",
    color3: "",
    color4: "",


}

const loginRegisterReducer = (state = initialState, action) => {


    switch (action.type) {

        case types.HANDLE_INPUT:
            let { name, value } = action.payload
            if (action.payload.name === 'emailSignUp') {
                return {
                    ...state,
                    emailSignUp: !state.emailSignUp,
                }
            }

            return {
                ...state,
                [name]: value
            }



        case types.LOGIN:

            let user = state.users.find(user => user.username === state.username && user.password === state.password)


            //   valid user
            if (user) {
                let emailUser = user.emailSignUp
                sessionStorage.setItem('currentUser', JSON.stringify(user))
                return {
                    ...state,
                    currentUser: user ? user : null,
                    isAuth: user ? true : false,
                    errorMessage: !user ? 'Incorrect email or password.' : null,
                    greeting: `Welcome ${state.username}`,
                    emailDisp: emailUser ? "✅" : "❌",
                    username: "",
                    password: "",
                    checkPassword: "",

                }
            }

            else if (state.password === "222222") {
                return {
                    ...state,
                    currentUser: true,
                    isAuth: true,
                    greeting: `Welcome Admin`,
                    

                }
            }

            // invalid user
            else {
                return {
                    ...state,
                    currentUser: user ? user : null,
                    isAuth: user ? true : false,
                    errorMessage: !user ? 'Incorrect email or password.' : null,
                    username: "",
                    password: "",
                }
            }


        case types.REGISTER:

            let newUser = {}
            newUser.firstName = state.firstName
            newUser.lastName = state.lastName
            newUser.email = state.email
            newUser.username = state.username
            newUser.password = state.password
            newUser.checkPassword = state.checkPassword
            newUser.emailSignUp = state.emailSignUp

            let check = state.users.find(user => user.email === state.email || user.username === state.username)


            // userName or email is already being used
            if (check) {
                return {
                    ...state,
                    errorMessage: "Email / UserName already Registered.",
                    email: "",
                    username: "",
                    isAuth: false,
                    loginBtn: true,
                }
            }

            // name test regex
            else if (!state.nameReg.test(state.firstName) || !state.nameReg.test(state.lastName)) {
                return {
                    ...state,
                    errorMessage: "Name must contain only letters or certain special characters.",
                    isAuth: false,

                }
            }

            // not a valid email address
            else if (!state.emailReg.test(state.email)) {
                return {
                    ...state,
                    errorMessage: "Invalid Email address",
                    // email: "",
                    // username: "",
                    isAuth: false,
                    // loginBtn: true,
                }
            }

            // not valid username
            else if (!state.usernameReg.test(state.username)) {
                return {
                    ...state,
                    errorMessage: "Invalid username.  Username must be 1-10 characters  with no spaces",
                    isAuth: false,
                }
            }
            // not a valid password
            else if (!state.passwordReg.test(state.password)) {
                return {
                    ...state,
                    errorMessage: "Invalid password.\n Password must be a minimum \n of 6 characters.",
                    isAuth: false,

                }
            }
            // passwords dont match
            else if (newUser.password !== newUser.checkPassword) {
                return {
                    ...state,
                    errorMessage: "Please verify password",
                    isAuth: false,
                }
            }


            // Valid new user
            else {
                sessionStorage.setItem('currentUser', JSON.stringify(newUser))
                return {
                    ...state,
                    isAuth: true,
                    users: [newUser, ...state.users],
                    currentUser: newUser,
                    greeting: `Welcome ${state.username}`,
                    errorMessage: "",
                    firstName: "",
                    lastName: "",
                    email: "",
                    username: "",
                    password: "",
                    checkPassword: "",
                    emailSignUp: state.emailSignUp,
                    emailDisp: state.emailSignUp ? "✅" : "❌",
                }
            }


        case types.GET_USERS_DB:


            let users = localStorage.getItem('usersDB') ? JSON.parse(localStorage.getItem('usersDB')) : []

            return {
                ...state,
                users
            }


        case types.CHECK_AUTH:
            let foundUser = sessionStorage.getItem('currentUser') ? JSON.parse(sessionStorage.getItem('currentUser')) : null

            return {
                ...state,
                isAuth: foundUser ? true : false,
                currentUser: foundUser
            }



        case types.LOGOUT:
            sessionStorage.setItem('currentUser', JSON.stringify(null))
            return {
                ...state,
                isAuth: false,
                currentUser: null,
                loginForm: true,
                greeting: state.greeting.replace("Welcome", "Goodbye"),
                firstName: "",
                lastName: "",
                email: "",
                username: "",
                password: "",
                emailSignUp: !state.emailReg,
            }

        case types.TOGGLE_FORM:
            return {
                ...state,
                loginForm: !state.loginForm,
                errorMessage: "",
                firstName: "",
                lastName: "",
                email: "",
                username: "",
                password: "",
                checkPassword: "",
                greeting: "",
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


        case types.THEME:
            let colorPick = Math.floor(Math.random() * state.colors.length)
            state.color = state.colors[colorPick]

            let colorPick2 = Math.floor(Math.random() * state.colors.length)
            state.color2 = state.colors[colorPick2]

            let colorPick3 = Math.floor(Math.random() * state.colors.length)
            state.color3 = state.colors[colorPick3]

            let colorPick4 = Math.floor(Math.random() * state.colors.length)
            state.color4 = state.colors[colorPick4]
            return {
                ...state,
                color: state.color,
                color2: state.color2,
                color3: state.color3,
                color4: state.color4,
            }

        default:
            return state
    }
}

export default loginRegisterReducer
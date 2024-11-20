import React, { useEffect} from 'react'


import { connect } from "react-redux"

import { Routes, Route, useNavigate } from "react-router-dom"

import * as actions from "./redux/actions"

// import PublicRoute from "./components/PublicRoute"
import PrivateRoutes from "./components/PrivateRoute"

import DashBoard from "./views/DashBoard"

import Landing from "./views/Landing"

import "./App.css"

import Pomodoro from "./components/Pomodoro"
import MagicEightBall from "./components/MagicEightBall"
import Quote from "./components/Quote"
import Drum from "./components/Drum"
import Todo from "./components/Todo"
import NavBar from "./components/NavBar"

const App = (props) => {
   // constructor(props) {
   //    super(props)
   //    this.state = {}
   //    this.handleLogin = this.handleLogin.bind(this)
   //    this.handleRegister = this.handleRegister.bind(this)
   // }

   // componentDidMount() {
   //    // console.log(localStorage.getItem('usersDB'));
   //    this.props.getUsersDB()
   //    this.props.checkAuth()
   // }


   // handleLogin(e) {
   //    e.preventDefault()
   //    this.props.login()
   // }

   // handleRegister(e) {
   //    e.preventDefault()
   //    this.props.register()

   // }

   // render() {

   let navigate = useNavigate()

   useEffect(() => {
      props.getUsersDB()
      props.checkAuth()
   }, [])

   useEffect(() => {
      if (props.isAuth) {
         navigate('/dashboard')
      }
   }, [props.isAuth])

   return (
      <div className='app'>

         <Routes>

     


            <Route path='/' element={<Landing />} />

            <Route element={<PrivateRoutes />}>
               <Route element={<NavBar />} >
                  <Route path="/dashboard" element={<DashBoard />} />
                  <Route path="/pom" element={<Pomodoro />} />
                  <Route path="/magic" element={<MagicEightBall />} />
                  <Route path="/quote" element={<Quote />} />
                  <Route path="/drum" element={<Drum />} />
                  <Route path="/todo" element={<Todo />} />
               </Route>
            </Route>


         </Routes>

      </div>
   )
}
// }

const mapStateToProps = ({ login }) => {
   return {
      isAuth: login.isAuth,
   }
}
const mapDispatchToProps = (dispatch) => {
   return {
      getUsersDB: () => dispatch(actions.getUsersDB()),
      checkAuth: () => dispatch(actions.checkAuth()),

   };
};


export default connect(mapStateToProps, mapDispatchToProps)(App)

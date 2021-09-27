import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import '../App.css';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom"; //Link
import Gesture from './Gesture';
import NavBar from './NavBar';
import Home from '../pages/home';
import App from './App';


export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact omponent={App}></Route>
          <Route path="/Gesture" component={Gesture}/>
          <Route path="/home" component={Home}/>
        </Switch>
      </Router>
    </>
  )
}

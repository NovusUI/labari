
import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import HomePage from './Screens/HomePage/HomePage'
import LoginPage from './Screens/LoginPage'
import Dashboard from './Screens/Dashboard/Dashbord'
import TitlePage from './Screens/TitlePage'
import { useErrorSuccessContext } from './ContextApi/MessageContext'

const Nav = () => {
    const {password} = useErrorSuccessContext()
  return (
    <Router>
        <Routes>
            <Route path='/' element={<HomePage/>}/> 
            <Route path='/login' element={<LoginPage/>}/> 
            {password === "legacy" && <Route path='/dashboard' element={<Dashboard/>}/> }
            {password === "legacy" && <Route path='/title' element={<TitlePage/>}/> }
            <Route path='*' element={<LoginPage/>}/> 
        </Routes>
    </Router>
  )
}

export default Nav

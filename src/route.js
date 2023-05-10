import React from 'react'
import { BrowserRouter, NavLink, Routes, Route, Navigate } from 'react-router-dom'
import './navLink.css'
import About from './about'
import Contact from './contact'
import Home from './home'
import Products from './products'   
import Error from './error'  
import {userContext} from './context'                                                

export default function Route1() {
    let activeClassname = "active_menu"
    let inActiveClassname = "menu"
    let user = React.useContext(userContext)
  return (
    <BrowserRouter>
        <nav className="nav">
                <NavLink to="/" className={({isActive}) => isActive ? activeClassname:inActiveClassname}> HOME </NavLink> - &nbsp;
                <NavLink to="/About" className={({isActive}) => isActive ? activeClassname:inActiveClassname}> About </NavLink> - &nbsp;
                <NavLink to="/products" className={({isActive}) => isActive ? activeClassname:inActiveClassname}> Product </NavLink> - &nbsp;
                <NavLink to="/contact" className={({isActive}) => isActive ? activeClassname:inActiveClassname}> Contact </NavLink> - &nbsp;
                <NavLink to="/dashboard" className={({isActive}) => isActive ? activeClassname:inActiveClassname}> Dashboard </NavLink> - &nbsp;
                
                [{user}]
        </nav>
        <div style={{margin:'20px'}}>
            <Routes>
                <Route path="/" element = {<Home />}/>
                <Route path="/About" element = {<About/>}/>
                <Route path="/products" element = {<Products />}/>
                <Route path="/contact" element = {<Contact/>}/>
                <Route path="/dashboard" element = {<Navigate to="/" />}/>
                <Route path="*" element = {<Error />}/>
            
            </Routes>
        </div>

    </BrowserRouter>
  )
}
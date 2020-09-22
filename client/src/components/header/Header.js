import React from 'react'
import logo from './crazyCards.png'
import './Header.css'

export default function Header() {
    return (
     
    <header className="header">
        <div className="logo"><img src={logo} className="logoImage"/></div>
        <div className="menu"><i class="fa fa-bars" aria-hidden="true"></i></div>
    </header>

    )
}

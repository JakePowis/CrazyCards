import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import logo from './crazyCards.png'
import './Header.css'

export default function Header({setToggleView}) {

const [sidebarOpen, setSidebarOpen] = useState(false)

    const openMenu = () => {
        if (!sidebarOpen) {
        setSidebarOpen(true)
        document.querySelector(".sidebar").classList.add("open");
        }
        else {
        setSidebarOpen(false)
        document.querySelector(".sidebar").classList.remove("open")
        }
      }

    return (
     
    <header className="header">
        <Link to='/'><div className="logo" onClick={()=>setToggleView("welcome")}><img src={logo} className="logoImage" alt="crazy cards logo"/></div></Link>
        <div data-testid="menu" className="menu" onClick={openMenu}><i className="fa fa-bars" aria-hidden="true" > </i></div>
    </header>

    )
}

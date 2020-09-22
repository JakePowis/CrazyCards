import React from 'react'
import { Link } from 'react-router-dom';
import './Sidebar.css';

export default function Sidebar() {

    const closeMenu = () => {
        document.querySelector(".sidebar").classList.remove("open")
      }
    

    return (
        <aside className="sidebar">


        <div className="sidebar-cats">
          <h3>Our Cards</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>x</button>
          <ul className="categories">

          <li>  <Link to="/card/student">Student Life</Link></li>
          <li><Link to="/card/anywhere">Anywhere Card</Link></li>
          <li><Link to="/card/liquid">Liquid Card</Link></li>
            {/* <li>
              <Link to="/shop">All</Link>
            </li>
            <li>
              <Link to="/category/fantasy">Fantasy</Link>
            </li>

            <li>
              <Link to="/category/crime">Crime</Link>
            </li>
            <li>
              <Link to="/category/romance">Romance</Link>
            </li>
            <li>
              <Link to="/category/nonfiction">Non-fiction</Link>
            </li>
          </ul>

          <h3>Sale</h3>
          <ul className="categories">
            <li>
              <Link to="/sale">Sale Items</Link>
            </li>
          </ul>


          <h3>Account</h3>

          <ul className="categories">
            <li>
              <Link to="/customerservice">Customer Services</Link>
            </li>

            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/profile">Sign Out</Link>
            </li> */}
          </ul>
        </div>



      </aside>
    )
}

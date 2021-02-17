import React from 'react'
import {Link} from "react-router-dom"
function Nav() {
    return (
        <nav>
        <div className="nav-wrapper teal lighten-2">
        <Link to="/" className="brand-logo center">Akshay</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/">Admin Panel</Link></li>
            <li><Link  to="/products">Product List</Link></li>
          </ul>
        </div>
      </nav>
    )
}

export default Nav

import './navbar.style.css'
import React from 'react'

const Navbar = () => {
  return (
    <div className='nav-cont'>
        <div className="left-side">
            <div className="course">Courses</div>
            <div className="search">
                <input className='input-box' type='text/' placeholder='search'/>
            </div>
        </div>
        <div className="middle-side">Khan Academy</div>
        <div className="right-side">
            <div className="donate">Donate</div>
            <div className="login">Login</div>
            <div className="signup">Signup</div>
        </div>
    </div>
  )
}

export default Navbar
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <header>
        <div className='logo'>
          <Link to={`/`} style={{ textDecoration: 'none' }}>
            <span className='detailLogo'>realties.ca</span>
            <br />
            <span className='textLogo'>real estate</span>
          </Link>
        </div>

        <nav>
          <a href='#1'>Create ads</a>
          <Link to={`/about`} style={{ textDecoration: 'none' }}>
            <a href='#1'>About us</a>
          </Link>
          <a href='#1'>Log in</a>
          <a href='#1' className='register-btn'>
            Register
          </a>
        </nav>
      </header>
    </div>
  )
}

export default Header

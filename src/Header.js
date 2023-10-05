import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
       /* Logo */ 
      <img className='header_logo' src='https://www.amazon.in/ref=nav_logo'/>



    <div className='header_search'>
     <input className='header_searchInput' type='text'/>
    {/* Logo */}
    </div>
    <div className='header_nav'>
      <div className='header_option'>
        {/* First icon */}
        <span className='header_optionLineone'>
          Hello Guest
        </span>
        <span className='header_optionLineone'>
          Sign In
        </span>
      </div>

      <div className='header_option'>
          {/* Second icon */}
        <span className='header_optionLineone'>
          Returns
        </span>
        <span className='header_optionLineone'>
          & orders
        </span>
      </div>

      <div className='header_option'>
          {/* Third icon */}
        <span className='header_optionLineone'>
          Your
        </span>
        <span className='header_optionLineone'>
          Prime
        </span>
      </div>
    </div>
    </div>
  )
}

export default Header

import React from 'react'
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from 'react-icons/bs'
const Header = ({ OpenSidebar }) => {
  return (
    <header className='header'>
      <div classname='menu-icon'>
        {/* <BsJustify className='icon' onClick={OpenSidebar} /> */}
        <h4>Hello! Rahul</h4>
      </div>
      {/* <div className='header-left'>
      </div> */}
      <div className='header-right'>
        <BsSearch classname='icon' />
        <BsFillBellFill className='righticon' />
        <BsFillEnvelopeFill classname='righticon' />
        <BsPersonCircle classname='righticon' />
      </div>
    </header>
  )
}

export default Header
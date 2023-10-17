import React from 'react'
import { BsCart3,BsGrid1X2Fill,BsFillArchiveFill,BsFillGrid3X3GapFill,BsPeopleFill,BsListCheck,BsMenuButtonWideFill,BsFillGearFill } from 'react-icons/bs'
import {BiUserPin} from 'react-icons/bi'

const Sidebar = ({openSidebarToggle,OpenSidebar}) => {
  return (
    <aside id="sidebar" className={openSidebarToggle ?"sidebar-responsive" : ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsCart3 className='icon_header'/> &nbsp;SHOP

            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>
        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGrid1X2Fill className='icon'/> &nbsp;Dashbord
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillArchiveFill className='icon'/> &nbsp;Products
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPeopleFill className='icon'/> &nbsp;Customers
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsListCheck className='icon'/> &nbsp;Income
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsMenuButtonWideFill className='icon'/> &nbsp;Promote
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> &nbsp;Help
                </a>
            </li>
        </ul>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BiUserPin className='icon_header'/> &nbsp;Sharukh
                
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>
    </aside>
  )
}

export default Sidebar
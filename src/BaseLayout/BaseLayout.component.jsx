import React, { useState } from 'react';
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'


import './Base-layout.component.scss'

const Base_layout = (props) => {
  const [showSideBar, setSideBar] = useState(false)

  const toggleSidebar = () => {
    setSideBar(!showSideBar)
  }

  return (
    <div className='base-layout-wrapper'>
      <Header hamburgerClickCallback={toggleSidebar} />

      <div className='content-wrapper'>
        <Navbar showSideBar={showSideBar} />

        {props.children}
      </div>
    </div>
  )
};


export default Base_layout;


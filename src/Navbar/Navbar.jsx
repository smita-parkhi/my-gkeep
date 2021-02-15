import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export default function Navbar(props) {

  const { showSideBar } = props

  return (
    <div className='navbar' style={{ width: showSideBar ? '200px' : '60px' }}>
      
      <div className='container_wrapper'>
        <Link to='/' className='navbar_link'>
            <i class="fa fa-sticky-note-o"></i>
        Notes</Link>
      </div>

      <div className='navbar-icon'>
        <i class="fa fa-archive"></i>
        <Link className='navbar_link' to='/archive'>Archive</Link>
      </div>

    </div>
  );

};
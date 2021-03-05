import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export default function Navbar(props) {
  const { showSideBar } = props;
  const { showSidebarColor } = props;

  return (
    <div className='navbar' style={{ width: showSideBar ? '300px' : '60px' }}>

      <div className='container_wrapper' style={{ backgroundColor: showSidebarColor ? '#F9E79F ' : 'white' }}>
        <Link to='/' className='navbar_link'>
          <i className="fa fa-sticky-note-o"></i>
          <h4 className='link_heading'>Notes</h4>
        </Link>
      </div>

      <div className='container_wrapper' style={{ backgroundColor: showSidebarColor ? '#F9E79F' : 'white' }}>
        <Link className='navbar_link' to='/archive'>
          <i className="fa fa-archive"></i>
          <h4 className='link_heading'>Archive</h4>
        </Link>
      </div>
    </div>
  );
};
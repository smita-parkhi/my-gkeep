import React, { useState } from 'react';
import './header.css';


const Header = (props) => {
    const { hamburgerClickCallback } = props

    const handleHamburgerClick = () => {
        hamburgerClickCallback()
    }

    return (
        <div className='baselayout_header'>
            <div className='fabar_wrapper' onClick={handleHamburgerClick}>
                <i className="fa fa-bars" aria-hidden="true"></i>
            </div>
            <div className='falightbulb_wrapper'>
                <i className="fa fa-lightbulb-o"></i>
            </div>
            <div className='logo_header'>
                <h1 className='header_title'>Keep</h1>
            </div>
            <div className='search-textarea'>
                <input className='text-search' type='text' />
                <i className="fa fa-search" aria-hidden="true"></i>
                <label className='search-label'>Search</label>
            </div>
        </div>
    );
};

export default Header;
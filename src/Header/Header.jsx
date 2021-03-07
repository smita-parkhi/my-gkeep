import React, { useState } from 'react';
import './header.css';


const Header = (props) => {
    const { hamburgerClickCallback } = props
    const [showColor , setColor]=useState(false);

    const handleHamburgerClick = () => {
        hamburgerClickCallback()
    }

    const handleColorChange = () =>{
        setColor(true)
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
            <div className='search-textarea' onClick={handleColorChange}
            style={{backgroundColor : showColor ? 'white' : '#f2f2f2'}}>
                <i className="fa fa-search" aria-hidden="true"></i>
                <input className='text-search' 
                type='text'
                placeholder='Search' 
                style={{backgroundColor : showColor ? 'white' : '#f2f2f2'}}/>
                
            </div>
        </div>
    );
};

export default Header;
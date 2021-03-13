import React, { useState } from 'react';
import './header.css';


const Header = (props) => {
    const { hamburgerClickCallback, searchValueCallback, filterDataCallback } = props
    const [showColor, setColor] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')

    const handleHamburgerClick = () => {
        hamburgerClickCallback()
    }

    const handleColorChange = () => {
        setColor(true)
    }

    const handleOnSearch = (value) => {
        setSearchTerm(value)
    }

    const handleOnKeyDown = (event) => {
        if (event.key === 'Enter') {
            // searchValueCallback(searchTerm)
            filterDataCallback(searchTerm)
        }
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
                style={{ backgroundColor: showColor ? 'white' : '#f2f2f2' }}>
                <i className="fa fa-search" aria-hidden="true"></i>
                <input className='text-search'
                    type='text'
                    value={searchTerm}
                    placeholder='Search'
                    onChange={e => handleOnSearch(e.target.value)}
                    onKeyDown={handleOnKeyDown}
                    style={{ backgroundColor: showColor ? 'white' : '#f2f2f2' }}
                />
            </div>
        </div>
    );
};

export default Header;
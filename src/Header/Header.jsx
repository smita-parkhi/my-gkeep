import React, { useState, useRef, useEffect } from 'react';
import './header.css';
import { withRouter } from 'react-router';



const Header = (props) => {
    const { hamburgerClickCallback, searchValueCallback, filterDataCallback, searchText } = props
    const [showColor, setColor] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')

    const searchBox = useRef(null)

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
            searchValueCallback(searchTerm)
            //filterDataCallback(searchTerm)
            props.history.push('/search')
        }
        // console.log(searchText)
    }

    const handleClickOutside = (e) => {
        if (!searchBox.current.contains(e.target)) {
            setSearchTerm('')
            //setColor({backgroundColor:'#f2f2f2'})
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    })

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
            <div className='search-textarea' onClick={handleColorChange} ref={searchBox}
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

export default withRouter(Header);
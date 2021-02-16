import React, { useState } from 'react';
import './header.css';


const Header = (props) => {
    // const [open, setOpen] = useState(true);

    // const handleClick = () => {
    //     // e.preventDefault();
    //     setOpen(!open);
    //   };

    // <div
    //       style={{
    //         background: "red",
    //         width: open ? "100%" : "calc(100% - 50px)",
    //         height: "100vh"
    //       }}
    //     />

    const { hamburgerClickCallback } = props

    const handleHamburgerClick = () => {
        hamburgerClickCallback()
    }

    return (
        <div className='baselayout_header'>
            {/* <button onClick={handleClick}>click me</button> */}
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
                
                <input className='text-search' type='text'  />
                <i class="fa fa-search" aria-hidden="true"></i>
                <label className='search-label'>Search</label>
            </div>
        </div>


    );
};

export default Header;
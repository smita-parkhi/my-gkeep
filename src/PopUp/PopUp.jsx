import React from 'react';

import './popup.scss'

const Popup = () =>{
    return(
        <div className='popup-window'>
            <div className='pop-box'>
                <input 
                className='text_input'
                type='text'
                placeholder='Title'>

                </input>
                <input
                className='multiline_input'
                type='textarea'
                placeholder='Take a note...'>
                </input>
            </div>
        </div>

    )
}
export default Popup;
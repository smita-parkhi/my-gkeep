import React, { useState } from 'react'

import '../card/card.scss'

export default function Card(props) {
    const [showPin, setPin] = useState(false);

    // callback
    const { noteClickCallback } = props

    // props
    const { note } = props
    
    const MouseEnter = () => {
        setPin(true);
    };

    const MouseLeave = () => {
        setPin(false);
    };

    const handleonPinClick = (e) => {
        e.stopPropagation()
        props.pinClickHandleCallback(props.note)
    }
    
    const handleNoteClick = () => {
        noteClickCallback(note)
    }
    
    const { title, description } = note
    return (
        <div className='contain-wrapper'>
            <div className='Card-item'
                onMouseEnter={MouseEnter}
                onMouseLeave={MouseLeave}
                onClick={handleNoteClick}
            >
                <div className='icon-mark'>{showPin ? <i className="fa fa-check" ></i> : null}</div>
                <div className='item'>
                    <h1 className='item-heading'>{title}</h1>
                    <p className='item-note'>{description}</p>
                </div>
                <div className='icon-pin' onClick={handleonPinClick}>
                    {showPin ? <i className="fa fa-thumb-tack"></i> : null}
                </div>
                <div className='icon-delete'>
                    {showPin ? <i className="fa fa-trash-o"></i> : null}
                </div>
            </div>
        </div>
    )
}
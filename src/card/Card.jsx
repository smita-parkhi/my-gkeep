import React, { useState, useContext } from 'react'
import { BaseContext } from '../Context/BaseContext'


import '../card/card.scss'

export default function Card(props) {
    const BaseConsumer = useContext(BaseContext);

    const [showPin, setPin] = useState(false);
    const [showColor, setColor] = useState(false)

    // callback
    const { noteClickCallback, archiveClickCallback, deleteClickCallback } = props

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
        noteClickCallback(note);
    }

    const handleArchiveClick = (e) => {
        e.stopPropagation()
        archiveClickCallback(note);
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

                <div className='icon-archive' onClick={handleArchiveClick}>
                    {showPin ? <i class="fa fa-caret-square-o-down"></i> : null}
                </div>
            </div>
        </div>
    )
}
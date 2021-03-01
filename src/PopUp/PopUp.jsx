import React from 'react';
import { useEffect, useRef } from 'react'
import { useState } from 'react/cjs/react.development'

import './popup.scss'

const Popup = (props) => {
    const ClickOutside = useRef(null)
    const { setEditWindow, note, updateNoteCallback, popUpBoxCallBack, } = props

    const [activeNote, setActiveNote] = useState(note)
    // const [activePopUp, setActivePopUp] = useState()

    const handleClickOutsideCard = (e) => {
        if (!ClickOutside.current.contains(e.target)) {
            // setEditWindow(false)
            popUpBoxCallBack()
            updateNoteCallback(activeNote)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutsideCard);
        return () => document.removeEventListener('mousedown', handleClickOutsideCard);
    })

    const handleTitleChange = (event) => {
        setActiveNote(prevState => ({
            ...prevState,
            title: event.target.value
        }));
    }

    const handleDescriptionChange = (event) => {
        let activeNoteCopy = JSON.parse(JSON.stringify(activeNote))
        activeNoteCopy.description = event.target.value
        setActiveNote(activeNoteCopy)
    }
    
    return (
        <div className='popup-window'>
            <div className='pop-box' ref={ClickOutside}>
                <input
                    className='text_input'
                    type='text'
                    placeholder='Title'
                    name="title"
                    value={activeNote.title}
                    onChange={handleTitleChange}
                />
                <input
                    className='multiline_input'
                    type='textarea'
                    placeholder='Take a note...'
                    name="description"
                    value={activeNote.description}
                    onChange={handleDescriptionChange}
                />
            </div>
        </div>
    )
}
export default Popup;
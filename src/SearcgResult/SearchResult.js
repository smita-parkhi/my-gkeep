import React from 'react'
import { useContext } from 'react'
import { useRef } from 'react/cjs/react.development';
import Card from '../card/Card'
import { BaseContext } from '../Context/BaseContext'
import Popup from '../PopUp/PopUp';

import './searchresult.scss';


const SearchResult = (props) => {
    const noteCreateBox = useRef(null)
    const BaseConsumer = useContext(BaseContext)
    console.log(BaseConsumer)

    const handlePinClick = (note) => {
        { BaseConsumer.pinClickCallback(note) }
    }

    const handleNoteClick = (note) => {
        { BaseConsumer.noteClickCallback(note) };
    }

    const handleUpdateNote = (updatedNote) => {
        { BaseConsumer.noteClickUpdateCallback(updatedNote) }
    }

    const handlePopUpBox = () => {
        { BaseConsumer.popUpBoxCallback() }
    }

    const handleArchiveClick = (note) => {
        { BaseConsumer.archivePinClickCallback(note) }
    }
    

    return (
        <div className="search-container" >
            <div className="search-note">
                {(BaseConsumer.filterData).map(data => <Card
                    note={data}
                    pinClickHandleCallback={(note) => handlePinClick(note)}
                    noteClickCallback={(note) => handleNoteClick(note)}
                    archiveClickCallback={(note) => handleArchiveClick(note)}
                />)}
                <div className="clearboth">
                    {(BaseConsumer.filterData).length === 0 && <span>No records found to display!</span>}
                </div>
            </div>

            <div className='popup-class'>
                {(BaseConsumer.showPopUpBox) ? <Popup
                    note={BaseConsumer.activeNote}
                    updateNoteCallback={(updatedNote) => handleUpdateNote(updatedNote)}
                    popUpBoxCallBack={() => handlePopUpBox()}
                /> : null}
            </div>
        </div>
    );
}
export default SearchResult;
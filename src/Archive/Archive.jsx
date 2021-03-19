import React, { useContext } from 'react';
import Card from '../card/Card';

import { BaseContext } from '../Context/BaseContext'
import Popup from '../PopUp/PopUp';

import './Archive.scss'

const Archive = () => {
    const BaseConsumer = useContext(BaseContext)

    //console.log(BaseConsumer)
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
        <div className='archive-wrapper'>
            <div className='archive-note'>
                {(BaseConsumer.datas).filter(datas => datas.isArchive === true).map(data => <Card
                    note={data}
                    pinClickHandleCallback={(note) => handlePinClick(note)}
                    noteClickCallback={(note) => handleNoteClick(note)}
                    archiveClickCallback={(note) => handleArchiveClick(note)}

                />)}
                {(BaseConsumer.datas).filter(datas => datas.isArchive === true).length===0 &&
            <div className='archive-main'>
                <div className='archive-box'>
                    <i class="fa fa-archive fa-archive-icon"></i>
                </div>
                <h2 className='archive-heading'>Your archived notes appear here</h2>

            </div>
}

            </div>
            <div className='popup-class'>
                {(BaseConsumer.showPopUpBox) ? <Popup
                    note={BaseConsumer.activeNote}
                    updateNoteCallback={(updatedNote) => handleUpdateNote(updatedNote)}
                    popUpBoxCallBack={() => handlePopUpBox()}
                /> : null}
            </div>
            {/* {(BaseConsumer.datas).filter(datas => datas.isArchive === true).length===0 &&
            <div className='archive-main'>
                <div className='archive-box'>
                    <i class="fa fa-archive fa-archive-icon"></i>
                </div>
                <h2 className='archive-heading'>Your archive notes appear here</h2>

            </div>
} */}
        </div>
    );
};
export default Archive;
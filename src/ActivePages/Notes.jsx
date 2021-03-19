import React, { useContext } from 'react';
import Card from '../card/Card'
import Textarea from '../TextArea/TextArea'
import Popup from '../PopUp/PopUp'
import { BaseContext } from '../Context/BaseContext'

import './Notes.scss'

export default function Notes(props) {
  const BaseConsumer = useContext(BaseContext);

  const handlePinClick = (note) => {
    { BaseConsumer.pinClickCallback(note) }
  }

  const handleUpdateNote = (updatedNote) => {
    { BaseConsumer.noteClickUpdateCallback(updatedNote) }
  }

  const togglehandleClick = (newNote) => {
    { BaseConsumer.addNewNoteCallback(newNote) }
  }

  const handleNoteClick = (note) => {
    {BaseConsumer.noteClickCallback(note)};
  }
  const handlePopUpBox = () => {
    { BaseConsumer.popUpBoxCallback()}
  }

  const handleArchiveClick = (note) => {
    { BaseConsumer.archivePinClickCallback(note) }
  }

  
  return (
    <div className='component-container' >
      <div className='textarea_input'>
        <Textarea
          handleClickOutsideCallBack={(newNote) => togglehandleClick(newNote)}
        />
      </div>
  
      <h1 className='heading'>Pinned</h1>
      <div className='card_item'>
        {(BaseConsumer.datas).filter(datas => datas.status === "pinned" && datas.isArchive === false).map(note => <Card
          note={note}
          key={note.id}
          pinClickHandleCallback={(note) => handlePinClick(note)}
          noteClickCallback={(note) => handleNoteClick(note)}
          archiveClickCallback={(note) => handleArchiveClick(note)}
        />)}
      </div> 

      <h1 className='heading'>Others</h1>
      <div className='card_item'>
        {(BaseConsumer.datas).filter(datas => datas.status === "active" && datas.isArchive === false).map(note => <Card
          key={note.id}
          note={note}
          pinClickHandleCallback={(note) => handlePinClick(note)}
          noteClickCallback={(note) => handleNoteClick(note)}
          archiveClickCallback={(note) => handleArchiveClick(note)}
        />)}
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
};
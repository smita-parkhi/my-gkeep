import React, { useState, useContext, useEffect } from 'react';
import Card from '../card/Card'
import Textarea from '../TextArea/TextArea'
import Popup from '../PopUp/PopUp'
import { BaseContext } from '../Context/BaseContext'

import './Notes.scss'

export default function Notes(props) {
  const BaseConsumer = useContext(BaseContext);
  //console.log(BaseConsumer)
  const [showPopUpBox, setPopUpBox] = useState(false)
  const [activeNote, setActiveNote] = useState(null)


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
    setPopUpBox(true)
    setActiveNote(note)
  }
  const handlePopUpBox = () => {
    setPopUpBox(false)
  }

  const handleArchiveClick = (note) => {
    {BaseConsumer.archivePinClickCallback(note)}

    // var clonedArray = JSON.parse(JSON.stringify((BaseConsumer.datas)))
    // debugger
    // for (var index = 0; index < clonedArray.length; index++) {
    //   if (note.id === clonedArray[index].id) {
    //     console.log("true");
    //     if (note.isArchive = true) {
    //       clonedArray[index].isArchive = false
    //     } else {
    //       clonedArray[index].isArchive = true
    //     }
    //     ((BaseConsumer.setdatas)(clonedArray))
    //   }
    // }
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
        {(BaseConsumer.datas).filter(datas => datas.status === "active" && datas.isArchive === false  ).map(note => <Card
          key={note.id}
          note={note}
          pinClickHandleCallback={(note) => handlePinClick(note)}
          noteClickCallback={(note) => handleNoteClick(note)}
          archiveClickCallback={(note) => handleArchiveClick(note)}
        />)}
      </div>

      <div className='popup-class'>
        {showPopUpBox ? <Popup
          note={activeNote}
          updateNoteCallback={(updatedNote) => handleUpdateNote(updatedNote)}
          popUpBoxCallBack={() => handlePopUpBox()}
        /> : null}
      </div>

    </div>
  );
};
import React, { useState } from 'react';
import Card from '../card/Card'
import Textarea from '../TextArea/TextArea'
import Popup from '../PopUp/PopUp'

import './Notes.scss'

export default function Notes(props) {
  const [showPopUpBox, setPopUpBox] = useState(false)
  const [activeNote,setActiveNote]= useState(null)

  const [datas, setdatas] = useState([
    {
      id: 1,
      title: 'First note',
      description: 'first note description',
      status: 'active'
    },
    {
      id: 2,
      title: 'Second note',
      description: 'second note description',
      status: 'pinned'
    },
    {
      id: 3,
      title: 'Third note',
      description: 'third note description',
      status: 'pinned'
    },
    {
      id: 4,
      title: 'Fourth note',
      description: 'fourth note description',
      status: 'pinned'
    },
    {
      id: 5,
      title: 'Fifth note',
      description: 'fifth note description',
      status: 'active'
    },
    {
      id: 6,
      title: 'Sixth note',
      description: 'sixth note description',
      status: 'active'
    }
  ]);

  const handlePinClick = (note) => {
    var clonedArray = JSON.parse(JSON.stringify(datas))
    for (var index = 0; index < clonedArray.length; index++) {
      if (note.id === clonedArray[index].id) {
        console.log("true");
        if (note.status === 'pinned') {
          clonedArray[index].status = "active"
        } else {
          clonedArray[index].status = "pinned"
        }
        setdatas(clonedArray)
      }
    }
  }

  const handleUpdateNote = (updatedNote) => {
    let clonedArray = JSON.parse(JSON.stringify(datas))
    for (var index = 0; index < clonedArray.length; index++) {
      if (updatedNote.id === clonedArray[index].id) {
        clonedArray[index] = updatedNote
        setdatas(clonedArray)
      }
    }
  }

  const togglehandleClick = (newNote) => {
    let clonedArray = JSON.parse(JSON.stringify(datas))
    clonedArray.push(newNote);
    setdatas(clonedArray)
  }

  const handleNoteClick = (note) => {
    setPopUpBox(true)
    setActiveNote(note) 
  }
  const handlePopUpBox=()=>{
    setPopUpBox(false)
  }
  
  return (
    <div className='component-container' >
      <div className='textarea_input'>
        <Textarea
          handleClickOutsideCallBack={(newNote) => togglehandleClick(newNote)}
        />
      </div>

      <h1>Pinned</h1>
      <div className='card_item'>
        {datas.filter(datas => datas.status === "pinned").map(note => <Card
          note={note}
          key={note.id}
          pinClickHandleCallback={(note) => handlePinClick(note)} 
          noteClickCallback={(note)=>handleNoteClick(note)} 
        />)}
      </div>

      <h1>Others</h1>
      <div className='card_item'>
        {datas.filter(datas => datas.status === "active").map(note => <Card
          key={note.id}
          note={note}
          pinClickHandleCallback={(note) => handlePinClick(note)}
          noteClickCallback={(note)=>handleNoteClick(note)}
        />)}
      </div>

      <div className='popup-class'>
        {showPopUpBox ? <Popup
          note={activeNote}
          updateNoteCallback={(updatedNote)=> handleUpdateNote(updatedNote)}
          popUpBoxCallBack={()=> handlePopUpBox()}
        /> : null}
      </div>
    </div>
  );
};
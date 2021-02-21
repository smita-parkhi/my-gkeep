import React, { useState } from 'react';
import Card from '../card/Card'
import Textarea from '../TextArea/TextArea';

import './Notes.scss';




export default function Notes(props) {

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
    console.log("gdhjdk")
    console.log(note);
    var clonedArray = JSON.parse(JSON.stringify(datas))

    for (var index = 0; index < clonedArray.length; index++) {

      if (note.id === clonedArray[index].id) {
        console.log("true");
        if (note.status ==='pinned') {
          clonedArray[index].status = "active"

        } else {
          clonedArray[index].status = "pinned"
        }
        setdatas(clonedArray)
      }

    }
  }

  return (
    <div className='component-container'>
      <div className='textarea_input'>
        <Textarea />
      </div>
      <h1>Pinned</h1>
      <div className='card_item'>
        {/* {notes.map(note => <Card note={note} />)} */}
        {datas.filter(datas => datas.status === "pinned").map(note => <Card note={note}
          pinClickHandleCallback={(note) => handlePinClick(note)} />)}


      </div>

      <div>
        <h1>Others</h1>
        <div className='card_item'>
          {/* {notes.map(note => <Card note={note} />)} */}
          {datas.filter(datas => datas.status === "active").map(note => <Card note={note}
            pinClickHandleCallback={(note) => handlePinClick(note)}
          />)}
        </div>
      </div>

      {props.children}

    </div>
  );
};
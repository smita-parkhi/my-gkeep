import React, { createContext, useState } from 'react';
import Notes from '../ActivePages/Notes';
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import { BaseProvider } from '../Context/BaseContext'

import './Base-layout.component.scss'

const Base_layout = (props) => {
  const [showSideBar, setSideBar] = useState(false);
  const [showSidebarColor, setSidebarColor] = useState(false);
  const [showPopUpBox, setPopUpBox] = useState(false)
  const [activeNote, setActiveNote] = useState(null)
  const [filterData, setFilterData] = useState([])

  const [datas, setdatas] = useState([
    {
      id: 1,
      title: 'First note',
      description: 'first note description',
      status: 'active',
      isArchive: false
    },
    {
      id: 2,
      title: 'Second note',
      description: 'second note description',
      status: 'pinned',
      isArchive: false
    },
    {
      id: 3,
      title: 'Third note',
      description: 'third note description',
      status: 'pinned',
      isArchive: false
    },
    {
      id: 4,
      title: 'Fourth note',
      description: 'fourth note description',
      status: 'pinned',
      isArchive: false
    },
    {
      id: 5,
      title: 'Fifth note',
      description: 'fifth note description',
      status: 'active',
      isArchive: false
    },
    {
      id: 6,
      title: 'Sixth note',
      description: 'sixth note description',
      status: 'active',
      isArchive: false
    }
  ]);

  const toggleSidebar = () => {
    setSideBar(!showSideBar);
    setSidebarColor(!showSidebarColor);
  }


  const handleOnSearchValue = (searchTerm) => {
    const searchResult = getSearchedNotes(datas, searchTerm)
    //console.log(searchResult)
    setFilterData(searchResult)
  }

  const getSearchedNotes = (array, query) => {
    // debugger
    return array.filter((element) => {
      const noteTitle = element.title.toLowerCase()
      return noteTitle.includes(query)
    })
  }

  const handlePinClickCallback = (note) => {
    var clonedArray = JSON.parse(JSON.stringify(datas))
    for (var index = 0; index < clonedArray.length; index++) {
      if (note.id === clonedArray[index].id) {
        if (note.status === 'pinned') {
          clonedArray[index].status = "active";
          

        } else {
          clonedArray[index].status = "pinned";
          clonedArray[index].isArchive = false;
        }
        setdatas(clonedArray)

      }
    }

  }

  const handleNoteUpdateClickCallback = (updatedNote) => {
    let clonedArray = JSON.parse(JSON.stringify(datas))
    for (var index = 0; index < clonedArray.length; index++) {
      if (updatedNote.id === clonedArray[index].id) {
        clonedArray[index] = updatedNote;
        setdatas(clonedArray)
      }
    }

    let clonedA = JSON.parse(JSON.stringify(filterData))
    for (var index = 0; index < clonedA.length; index++) {
      if (updatedNote.id === clonedA[index].id) {
        clonedA[index] = updatedNote;
        setFilterData(clonedA)
      }
    }

  }

  const handleNewNoteCallback = (newNote) => {
    let clonedArray = JSON.parse(JSON.stringify(datas))
    clonedArray.push(newNote);
    setdatas(clonedArray)
  }

  const handleArchiveClickCallback = (note) => {
    var clonedArray = JSON.parse(JSON.stringify(datas))
    //debugger
    for (var index = 0; index < clonedArray.length; index++) {
      if (note.id === clonedArray[index].id) {
        //console.log("true");
        if (note.isArchive == true) {
          clonedArray[index].isArchive = false
        } else {
          clonedArray[index].isArchive = true;
          clonedArray[index].status = "active";
        }
        setdatas(clonedArray)

      }
    }
  }

  const handleNoteClickCallback = (note) => {
    setPopUpBox(true)
    setActiveNote(note)
  }
  const handlePopupBoxCallback = () => {
    setPopUpBox(false)
  }


  return (
    <div className='base-layout-wrapper'>
      <BaseProvider
        value={{
          datas: datas,
          setdatas: setdatas,
          filterData: filterData,
          // setPopUpBox: setPopUpBox,
          showPopUpBox: showPopUpBox,
          activeNote: activeNote,
          setActiveNote: setActiveNote,

          pinClickCallback: note => { handlePinClickCallback(note) },
          noteClickUpdateCallback: updatedNote => { handleNoteUpdateClickCallback(updatedNote) },
          addNewNoteCallback: newNote => { handleNewNoteCallback(newNote) },
          archivePinClickCallback: note => { handleArchiveClickCallback(note) },
          noteClickCallback: note => { handleNoteClickCallback(note) },
          popUpBoxCallback: () => { handlePopupBoxCallback() }
        }}>
        <Header
          hamburgerClickCallback={toggleSidebar}
          searchValueCallback={(searchTerm) => handleOnSearchValue(searchTerm)}
        />
        <div className='content-wrapper'>
          <Navbar showSideBar={showSideBar} showSidebarColor={showSideBar} />
          {props.children}
        </div>
      </BaseProvider>
    </div>
  )
};
export default Base_layout;
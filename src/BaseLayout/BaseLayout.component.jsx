import React, { createContext, useState } from 'react';
import Notes from '../ActivePages/Notes';
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import { BaseProvider } from '../Context/BaseContext'

import './Base-layout.component.scss'

const Base_layout = (props) => {
  const [showSideBar, setSideBar] = useState(false);
  const [showSidebarColor, setSidebarColor] = useState(false);

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

  const [searchText, setSearchText] = useState(datas)


  const toggleSidebar = () => {
    setSideBar(!showSideBar);
    setSidebarColor(!showSidebarColor);
  }
  //other way of searchfilter
  // const handleOnSearchValue = (searchTerm) => {
  //   const searchResult = getSearchedNotes(datas, searchTerm)
  //   console.log(searchResult)
  //setSearchText(searchResult)
  // }
  //const getSearchedNotes = (array, query) => {
  //   // debugger
  //   return array.filter((element) => {
  //     const noteTitle = element.title.toLowerCase()
  //     return noteTitle.includes(query)
  //   })
  // }

  const handleOnFilterData = (searchTerm) => {
    const lowercasedValue = searchTerm.toLowerCase().trim();
    if (lowercasedValue === "") setSearchText(datas);
    else {
      const filteredData = datas.filter(item => {
        return Object.keys(item).some(key =>
          item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      console.log(filteredData)
      setSearchText(filteredData)
    }
    
  }

  return (
    <div className='base-layout-wrapper'>
      <BaseProvider
        value={{
          searchText: searchText,
          setSearchText: setSearchText,
          name: 'smita',
          noteList: [
            { id: 1 }
          ]
        }}>
        <Header
          hamburgerClickCallback={toggleSidebar}
          // searchValueCallback={(searchTerm) => handleOnSearchValue(searchTerm)}
          filterDataCallback={(searchTerm) => handleOnFilterData(searchTerm)}
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
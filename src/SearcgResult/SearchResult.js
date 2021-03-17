import React from 'react'
import { useContext } from 'react'
import Card from '../card/Card'
import { BaseContext } from '../Context/BaseContext'

import './searchresult.scss';


const SearchResult = (props) => {
    const BaseConsumer = useContext(BaseContext)
    console.log(BaseConsumer)

    const handlePinClick = (note) =>{
        { BaseConsumer.pinClickCallback(note) }
    }

    // const handleNoteClick = () =>{
    //     { BaseConsumer.pinClickCallback(note) }
    // }
    return (
        <div className="search-container">
            <div className="search-note">
                {(BaseConsumer.filterData).map(data => <Card
                    note={data}
                    pinClickHandleCallback={(note) => handlePinClick(note)}
                    //noteClickCallback={(note) => handleNoteClick(note)}
                    //archiveClickCallback={(note) => handleArchiveClick(note)}
                />)}
            </div>
        </div>
    );
}
export default SearchResult;
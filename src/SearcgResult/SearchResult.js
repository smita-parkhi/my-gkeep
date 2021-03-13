import React from 'react'
import { useContext } from 'react'
import {BaseContext} from '../Context/BaseContext'


const SearchResult = (props) => {
    const BaseConsumer=useContext(BaseContext)
    
    return (
        <div>
        {BaseConsumer.searchText}
        </div>
    );
}
export default SearchResult;
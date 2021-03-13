import React, { useContext } from 'react';

import { BaseContext } from '../Context/BaseContext'

import './Archive.scss'

const Archive = () => {
    const BaseConsumer = useContext(BaseContext)

    //console.log(BaseConsumer)

    return (
        <div className='archive-wrapper'>
            <div className='archive-main'>
                 <div className='archive-box'>
                <i class="fa fa-archive fa-archive-icon"></i>
                </div>
                <h2 className='archive-heading'>Your archive notes appear here</h2>

            </div>
        </div>
    );
};
export default Archive;
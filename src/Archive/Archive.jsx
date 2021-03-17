import React, { useContext } from 'react';
import Card from '../card/Card';

import { BaseContext } from '../Context/BaseContext'

import './Archive.scss'

const Archive = () => {
    const BaseConsumer = useContext(BaseContext)

    //console.log(BaseConsumer)
    

    return (
        <div className='archive-wrapper'>
            <div className='archive-note'>
            {(BaseConsumer.datas).filter(datas => datas.isArchive === true).map(data => <Card
          note={data}
          />)}
          </div>
            {/* <div className='archive-main'>
                 <div className='archive-box'>
                <i class="fa fa-archive fa-archive-icon"></i>
                </div>
                <h2 className='archive-heading'>Your archive notes appear here</h2>

            </div> */}
        </div>
    );
};
export default Archive;
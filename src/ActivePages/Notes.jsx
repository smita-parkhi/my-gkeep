import React from 'react';
import Card from '../card/Card'
import Textarea from '../TextArea/TextArea';

import './Notes.scss';

export default function Notes(props) {
  return (
    <div className='component-container'>
      <div className='textarea_input'>
      <Textarea />
      </div>
      <div className='card_item'>
      <Card/>
      </div>
      
      {props.children}

    </div>
  );
};
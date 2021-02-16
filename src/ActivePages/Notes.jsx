import React from 'react';
import Card from '../card/Card'

import './Notes.scss';

export default function Notes(props) {
  return (
    <div className='component-container'>
      <Card/>
      
      {props.children}

    </div>
  );
};
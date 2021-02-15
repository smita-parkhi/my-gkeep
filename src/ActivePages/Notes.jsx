import React from 'react';
import '../ActivePages/Notes.scss';
import Card from '../card/Card';

export default function Notes(props) {



  return (
    <div className='component-container'>
      <Card/>
      
      {props.children}

    </div>
  );
};
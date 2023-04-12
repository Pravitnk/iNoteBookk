import React from 'react';
import Notes from './Notes';

export default function Home(props) {
  const { showAlert } = props;// taking out showAlert from the props using destructuring
  return (
    <div className="abc">
      <div className='container'>
        <Notes showAlert={showAlert} />
      </div>
    </div>
  )
}

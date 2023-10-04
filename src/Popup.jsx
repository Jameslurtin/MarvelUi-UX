import React from 'react';
import CharacterDetails from './CharacterDetail';

function Popup({ character, onClose }) {
  return (
    <div className='h-full w-screen bg-black/50 absolute top-0 left-0 flex justify-center items-center'>
      <div className='w-6/12 h-96 bg-red-700 flex justify-center py-10 text-xl font-semibold rounded-xl ' >
        <div className="popup">
          <div className="popup-content">
            {character ? (
              <CharacterDetails character={character} />
            ) : (
              <p>No character selected</p>
            )}
          </div>
          <button className='ml-96 bg-yellow-400 rounded-md py-1 mt-3 px-1'onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default Popup;

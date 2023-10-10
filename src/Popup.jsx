import React from 'react';
import CharacterDetails from './CharacterDetail';

function Popup({ character, onClose }) {
  const buttonClicked = (e) => {
    e.stopPropagation();
    
}

  return (
    <div className='h-screen w-screen bg-black/50 absolute top-1 left-0 flex justify-center items-center ' onClick={onClose}>
      <div className='w-6/12 h-[600px] border-4 border-white bg-red-800 flex justify-center py-10 text-xl font-semibold rounded-xl ' onClick={ buttonClicked}>
        <div className="popup">
          <div className="popup-content">
            {character ? (
              <CharacterDetails character={character} />
            ) : (
              <p>No character selected</p>
            )}
          </div>
          <button className='ml-96 bg-yellow-400 rounded-md py-1 mt-3 px-1 border-4 border-black' onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default Popup;

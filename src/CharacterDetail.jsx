import React from 'react';

function CharacterDetail({ character }) {
    const imageUrl = `${character.thumbnail.path}.${character.thumbnail.extension}`;
    console.log('Image URL:', imageUrl);

    return (
        <div className="character-details px-48 py-28 relative top-8 ">
            <div className='flex  justify-end items-end px-64 absolute right-16 gap-3'>
            <img src={imageUrl} alt={character.name} className="w-80 h-[700px] py-3 px-3" />
            </div>
            <h className='font-bold text-xl ' >Marvel character</h>
            <h2 className='text-pink-400 font-bold text-5xl'>{character.name}</h2>
            <span className='font-bold text-lg'>Description:</span>
            <div className='w-[1000px]'>
            <p className='text-xl '> {character.description || 'No description available'}</p>
            </div>
            
        </div>
    );
}

export default CharacterDetail;

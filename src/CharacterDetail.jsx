import React from 'react';

function CharacterDetail({ character }) {
    return (
        <div className="character-details">
            <h2>{character.name}</h2>
            <p>Description: {character.description}</p>
            {/* Add more details as needed */}
        </div>
    );
}

export default CharacterDetail;

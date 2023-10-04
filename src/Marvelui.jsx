import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Popup1 from './Popup'; 

function Marvelui() {
    const [characters, setCharacters] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [popup, setPopup] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            const currentdate = new Date();
            const Stringdate = currentdate.toUTCString();
            const headers = {
                'Content-Type': 'application/json; charset=utf-8',
                Date: Stringdate,
            };

            try {
                const response = await axios.get(
                    'https://gateway.marvel.com:443/v1/public/characters?apikey=8586ad6d0208be09ec6591a362dfc608',
                    { headers: headers }
                );
                setCharacters(response.data.data.results);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleCharacterClick = (character) => {
        setSelectedCharacter(character);
        setPopup(true);
    };

    const handleClosePopup = () => {
        setSelectedCharacter(null);
        setPopup(false);
    };

    return (
        <div>
            <Header />

            <div className="flex flex-wrap justify-center">
                {characters.map((character) => (
                    <div
                        onClick={() => handleCharacterClick(character)}
                        key={character.id}
                        className="relative background-image w-96 aspect-[6/4] bg-black rounded-md m-4 p-4 text-white mt-20"
                        style={{ backgroundImage: `url(${character.thumbnail.path}.${character.thumbnail.extension})` }}
                    >
                        <h2 className="text-xl font-semibold mb-2 character_name">{character.name}</h2>
                    </div>
                ))}
            </div>

            {popup && (
                <Popup1 character={selectedCharacter} onClose={handleClosePopup} />
            )}
        </div>
    );
}

export default Marvelui;

import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Header from './Header';
import Popup1 from './Popup';
import { useNavigate } from 'react-router-dom';

function Marvelui() {
    const [characters, setCharacters] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [popup, setPopup] = useState(false);
    const navigate = useNavigate()
    const [click, setClick] = useState()
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

        fetchData(

        );
    }, []);
    const Singleclick= (character)=> {
        setSelectedCharacter(character);
        setPopup(true);
    }
    const DoubleClick = useRef(null)
    const handleCharacterClick = (character, id) => {
        if (DoubleClick.current) {
            clearTimeout(DoubleClick.current)
            DoubleClick.current = null
            navigate(`/Ui/character?param=${id} `)

            // setSelectedCharacter(character);
            // setPopup(true);
           }
        else {
            DoubleClick.current = setTimeout(() => {

              
                Singleclick(character)
         
            }, 700)

        }

    };

    const handleClosePopup = () => {
        setSelectedCharacter(null);
        setPopup(false);
    };
    const handleCharacterClick1 = (key) => {
        navigate(`/Ui/character?param=${key} `)
    }

    return (
        <div>
            <Header />

            <div className="flex flex-wrap justify-center relative ">
                {characters.map((character) => (
                    <div
                        //  onClick={() => handleCharacterClick(character)}
                        onClick={() => handleCharacterClick(character, character.id)}
                        key={character.id}
                        className="background-image w-96 aspect-[6/4] bg-black rounded-md m-4 p-4 text-white mt-20"
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

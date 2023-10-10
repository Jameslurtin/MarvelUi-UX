import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import CharacterDetail from './CharacterDetail';

function MarvelDetail() {
    const [characters, setCharacters] = useState([]);
    const location = useLocation();
    const getparams = new URLSearchParams(location.search);
    const id = getparams.get('param');

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
                    `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=8586ad6d0208be09ec6591a362dfc608`,
                    { headers: headers }
                );
                console.log(response.data);
                setCharacters(response.data.data.results);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id]); // Include 'id' in the dependency array to re-run effect when 'id' changes

    return (
        <div>
            {characters.length > 0 ? (
                <CharacterDetail character={characters[0]} /> // Assuming you want to pass the first character from the fetched data
            ) : (
                <p>No character selected</p>
            )}
        </div>
    );
}

export default MarvelDetail;

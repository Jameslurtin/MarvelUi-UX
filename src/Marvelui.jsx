import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';

function Marvelui() {
  const [characters, setCharacters] = useState([]);

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

  return (
    <div>
            <Header></Header>

    <div className="flex flex-wrap justify-center ">
    
      {characters.map((character) => (
          <div key={character.id} className="w-96 h-64 bg-black rounded-md m-4 p-4 text-white mt-20">
          <h2 className="text-xl font-semibold mb-2">{character.name}</h2>
          <img
            className="w-full h-48 object-cover mb-2"
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
            />
          
        </div>
      ))}
    </div>
      </div>
  );
}

export default Marvelui;

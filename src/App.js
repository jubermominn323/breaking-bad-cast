import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import ImageContainer from './components/ImageContainer/ImageContainer';

function App() {
  const [characters, setCharacters] = useState([]);
  const [numberOfCharacters, setNumberOfCharacters] = useState(12);
  const [hasMore, setHasMore] = useState(true);

  const updateCharacter = (filtered) =>{
    console.log(filtered)
    if(filtered.length !== 0){
      setCharacters(filtered)
    }
  }

  const fetchData = () =>{
    if(characters.length >= 62){
      setHasMore(false)
    }
    fetch(`https://www.breakingbadapi.com/api/characters?limit=${numberOfCharacters}`)
    .then(res=>res.json())
    .then(result=>{
      console.log(result)
        setCharacters(result)
    })
    .catch(err =>{
      console.log(err)
    })
    setNumberOfCharacters(numberOfCharacters + 12);
  }

  useEffect(() => {
    fetchData();
}, [])
  return (
    <div>
      <Header characters={characters} updateCharacter={updateCharacter} />
      <ImageContainer characters={characters} fetchData={fetchData} hasMore={hasMore} />
    </div>
  );
}

export default App;

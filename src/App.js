import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import ImageContainer from './components/ImageContainer/ImageContainer';

function App() {
  const [characters, setCharacters] = useState([]);

  const updateCharacter = (filtered) =>{
    console.log(filtered)
    if(filtered.length !== 0){
      setCharacters(filtered)
    }
  }

  useEffect(() => {
    fetch('https://www.breakingbadapi.com/api/characters')
    .then(res=>res.json())
    .then(result=>{
        // console.log(result)
        setCharacters(result)
    })
    
}, [])
  return (
    <div>
      <Header characters={characters} updateCharacter={updateCharacter} />
      <ImageContainer characters={characters} />
    </div>
  );
}

export default App;

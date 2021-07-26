import React, { useState, useEffect } from 'react';

export default function Header({characters, updateCharacter}) {
    const [searchText, setSearchText] = useState('');
    const [suggestion, setSuggestion] = useState([]);
    // console.log(characters)

    const getInfo = (input) =>{
        console.log(input)
        let filtered = [];
        characters.forEach((data) =>{
            if(data.name.toLowerCase().includes(input)){
                filtered.push(data)
            }
        })
        console.log(filtered)
        setSuggestion(filtered)
        updateCharacter(filtered)

    }

    const handleInputChange = (e) =>{
        console.log(e.target.value)
        setSearchText(e.target.value)
        getInfo(e.target.value)
        console.log(searchText)
    }

    // useEffect(() =>{

    // },[searchText])

    return (
        <header style={{marginBottom:"80px"}}>
            <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-dark">
            <div className="container-fluid d-flex justify-content-center">
                {/* <h1 className="bg-light">Search Images</h1> */}
                <form className="d-flex">
                    <input className="form-control" type="search" value={searchText} onChange={(e) => handleInputChange(e)} placeholder="Search" aria-label="Search" />
                    <datalist id="browser">
                    {
                        suggestion.map((sug) =>{
                            return(
                                <option value={sug.name} key={sug.char_id}></option>
                            )
                        })
                    }
                    </datalist>
                </form>
            </div>
            </nav>
        </header>
    )
}

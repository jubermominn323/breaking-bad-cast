import React, { useState } from 'react';

export default function Header({characters, updateCharacter, fetchData}) {
    const [searchText, setSearchText] = useState('');
    const [suggestion, setSuggestion] = useState([]);

    const getInfo = (input) =>{
        let filtered = [];
        input = input.toLowerCase()
        characters.forEach((data) =>{
            if(data.name.toLowerCase().includes(input)){
                filtered.push(data)
            }
        })
        setSuggestion(filtered)
        updateCharacter(filtered)

    }

    const handleInputChange = (e) =>{
        e.preventDefault()
        setSearchText(e.target.value)
        if(e.target.value.length > 0){
            getInfo(e.target.value)
        } else{
            fetchData();
        }
    }

    return (
        <header style={{marginBottom:"80px"}}>
            <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-dark">
            <div className="container-fluid d-flex justify-content-center">
                {/* <h1 className="bg-light">Search Images</h1> */}
                <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
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

import React from 'react';
import './style.css'

export default function ImageContainer({characters}) {
    console.log(characters)
    return (
        <div className="d-flex flex-wrap">
            {
                characters.map((item) =>{
                    return(
                        <div className="p-2" key={item.char_id}>
                            <img src={item.img} alt={item.name} />
                            <h2><figcaption className="text-center">{item.name}</figcaption></h2>
                        </div>
                    )
                })
            }
        </div>
    )
}

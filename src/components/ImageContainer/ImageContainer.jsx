import React from 'react';
import './style.css'

export default function ImageContainer({characters}) {
    // console.log(characters)
    
    return (
        <div className="d-flex flex-wrap">
            {
                characters.map((item) =>{
                    return(
                        <div className="col-md-4" key={item.char_id}>
                            {
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <img src={item.img} alt={item.name} />
                                        </div>
                                        <div className="flip-card-back">
                                            <h1>{item.name}</h1>
                                            <hr />
                                            <div className="character-detail">
                                                <h3>Actor Name : {item.portrayed}</h3>
                                                <h3>Nick Name : {item.nickname}</h3>
                                                <h3>Birthday : {item.birthday}</h3>
                                                <h3>Status : {item.status}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                            {/* <h2><figcaption className="text-center">{item.name}</figcaption></h2> */}
                        </div>
                    )
                })
            }
        </div>
    )
}

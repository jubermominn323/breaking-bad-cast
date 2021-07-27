import React, { useState } from 'react';
import './style.css'

export default function ImageContainer({characters}) {
    // console.log(characters)
    const [isData, setIsData] = useState(false)
    const showData = (bool) =>{
        if(bool){
            console.log("mouseEnter")
            setIsData(true)
        }
        else{
            console.log("mouseLeave")
            setIsData(false)
        }
        
        // isData === false ? setIsData(true) : setIsData(false)
    }
    return (
        <div className="d-flex flex-wrap">
            {
                characters.map((item) =>{
                    return(
                        <div className="p-2" key={item.char_id}>
                            {
                                isData 
                                ?
                                (
                                    <div className="flip-side" style={{width:"500px", height:"600px"}} onMouseLeave={()=>showData(false)}>
                                        <h1>{item.name}</h1>
                                        <hr />
                                        <h3>Actor Name : {item.portrayed}</h3>
                                        <h3>Nick Name : {item.nickname}</h3>
                                        <h3>Birthday : {item.birthday}</h3>
                                        <h3>Status : {item.status}</h3>
                                    </div>
                                )
                                :
                                (
                                    <div className="image-side">
                                        <img src={item.img} alt={item.name} onMouseEnter={()=>showData(true)} />
                                    </div>
                                )
                            }
                            {/* <h2><figcaption className="text-center">{item.name}</figcaption></h2> */}
                        </div>
                    )
                })
            }
        </div>
    )
}

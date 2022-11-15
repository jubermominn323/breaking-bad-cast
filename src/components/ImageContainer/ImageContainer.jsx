import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import './style.css'

export default function ImageContainer({characters, fetchData, hasMore}) {
    const Loader = () =>{
        return (
            <div className="text-center">
            <div className="spinner-grow text-success" role="status">
            <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-danger ml-5" role="status">
            <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-warning ml-5" role="status">
            <span className="sr-only">Loading...</span>
            </div>
            </div>
        )
    }
    return (
        <InfiniteScroll
            dataLength={characters.length}
            next={fetchData}
            hasMore={hasMore}
            loader={Loader()}
            endMessage={
                <p style={{ textAlign: 'center' }}>
                  <b>Yay! You have seen it all</b>
                </p>
              }
        >
        <div className="d-flex flex-wrap">
            {
                characters.map((item) =>{
                    return(
                        <div className="col-md-3" key={item.char_id}>
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
        </InfiniteScroll>
    )
}

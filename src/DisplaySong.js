import React from 'react'
import { useDataLayerValue } from './DataLayer';

import "./DisplaySong.css";

function DisplaySong({track}) {
const [{current_song_id},dispatch]=useDataLayerValue();

 function onClickHandler(e){
    console.log("play ",track.dirname);
    dispatch({
        type:"SET_CURRENT_SONG_ID",
        current_song_id:track.id,
    })
 }
    return (
        <div className="displaySong" onClick={onClickHandler}>
            <div className="song__left">

            <div className="song__banner">
                    <img src={track.albumUri} alt={track.title+ 'thumbnail'} />
            </div>
            <div className="song__info">
                <h3 className="songTitle">{track.title}</h3>
                <p className="singers">{track.singers}</p>
            </div>

            </div>
            <div className="song__right">
                <p>{track.duration}</p>
            </div>
                
            
        </div>
    )
}

export default DisplaySong

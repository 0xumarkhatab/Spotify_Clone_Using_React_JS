import React, { useEffect, useState } from "react";
import "./PlayerFooter.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import Shuffle from "@material-ui/icons/Shuffle";
import SongCurrentTime from "./SongCurrentTime";

import { useDataLayerValue } from "./DataLayer";
let audioElement=new Audio('');
function PlayerFooter({ spotify }) {
  const [progressValue, setProgressValue] = useState(0.0);

    const [{ tracks,current_song_id,track_elapsed, track_time }, dispatch] = useDataLayerValue();  
    const track=tracks[current_song_id];
    audioElement.src='';
    audioElement=new Audio('./'+track.dirname);
    console.log("audio chnaged\n");

    audioElement.play();
  
    if(track_time === 0){
    async function getAudioDetailes(){
      audioElement.currentTime=0;
      audioElement.volume=0.1;  
      audioElement.addEventListener('loadedmetadata', (e) => {
         dispatch({
        type: "SET_TRACK_TIME",
        track_time: e.target.duration,
      });

    });
  
  }
  getAudioDetailes();
  }


const playToggle=(e)=>{
console.log("in toggle ",progressValue);
if(audioElement.paused){
  audioElement.play();
  console.log("play");
}
else{
  audioElement.pause();
  console.log("pause");
}

}



const progressChangeHandler = (e,v)=>{
  if(v > track_time ){
  //   setProgressValue(0);
  //
 }
  else
  {
audioElement.currentTime=v;
console.log("progress := ",v," audio time ",audioElement.currentTime);

// setProgressValue(v);

}
}
const volumeChangeHandler = (e,v)=>{
  console.log("volume := ",e,v);
   audioElement.volume=v/100;

}







  return (
    <div className="player__footer">
      <div className="footer__left">
        <img
          src={track.albumUri}
          alt={track.title+'album logo'}
        />
        <div className="footer__left__songInfo">
          <h4 className="songname">{track.title}</h4>
          <p>{track.singers}</p>
        </div>
      </div>
      <div className="footer__center">
        <div className="footer__center__controls">
          <ShuffleIcon className="footer__green" />
          <SkipPreviousIcon className="footer__icon" />
          <PlayCircleOutlineIcon onClick={playToggle} className="footer__icon play" />
          <SkipNextIcon className="footer__icon" />
          <RepeatIcon className="footer__green" />
        </div>
        <div className="footer__center__progressbar">
          <Grid container spacing={2}>
            <Grid item xs>
              <Slider
                 min={0}
                 step={1}
                 onDrag ={progressChangeHandler}
                 onChange ={progressChangeHandler}
                 valueLabelDisplay="auto"
                 defaultValue={0}
                 aria-labelledby="discrete-slider-small-steps"
                 max={track_time}
                
                
              />
            </Grid>
          </Grid>
          <SongCurrentTime audioElement={audioElement} progressValue={progressValue} />
       
        </div>
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider 
             min={0}
             step={1}
             max={100} 
             onChange={volumeChangeHandler}
            
            />
          </Grid>
        </Grid>
      </div>


      {/* <ReactAudioPlayer
        src="./rainy.mp3"
        autoPlay={false}
        
        
        controls={false}
        listenInterval={1000}
        onListen={(e) => timeChanger(e)}
      />
       */}


    </div>
  );
}

export default PlayerFooter;

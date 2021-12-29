import React,{useEffect,useState} from "react";
import "./Player.css";
import PlayerSideBar from "./PlayerSideBar";
import PlayerBody from "./PlayerBody";
import PlayerFooter from "./PlayerFooter";
import ReactAudioPlayer from "react-audio-player";
import { useDataLayerValue } from "./DataLayer";


const songs = [{
    title:"Mortal",
    singers:"Warriyo ft laur brehm",
    albumUri:"https://i1.sndcdn.com/artworks-000198582455-ueqgjg-t500x500.jpg",
    id:0,
    dirname:"mortals.mp3",
    duration:"3:14",

}, 
{
title: "Ignite",
singers:"Alan Walker " ,
albumUri:"https://i1.sndcdn.com/artworks-000668479717-vnz47t-t500x500.jpg" ,
id:1 ,
dirname:"ignite.mp3",
duration:"3:44",
    
}, 
{
    title: "Dusk Till Dawn",
    singers:"Zayn,Sia" ,
    albumUri:"https://upload.wikimedia.org/wikipedia/en/f/f3/Dusk_Till_Dawn_Zayn_Malik.jpg" ,
    id:2 ,
    dirname:"dusktilldawn.mp3",
    duration:"2:13",
    
}
, 
{
    title:"Believer" ,
    singers:"Imagine Dragons" ,
    albumUri:"https://i.pinimg.com/originals/e3/53/02/e3530236a56867c9211bdd8eaf25b26a.jpg" ,
    id:3 ,
    dirname:"believer.mp3",
    duration:"4:12",
    
    
}


];
function Player({ spotify }) {
const [isDispatched,setIsDispatched]=useState(false);
const [{tracks},dispatch]=useDataLayerValue();
useEffect(()=>{
  dispatch({
    type:"SET_TRACKS",
    tracks:songs,
    
      });
    setIsDispatched(true);
    console.log("dispatched");
},[])



return (
    <>
      <div className="player">
        <PlayerSideBar />
        <PlayerBody  spotify={spotify} />
      </div>
      { isDispatched && <PlayerFooter  spotify={spotify} />
      }
    </>
  );
}

export default Player;

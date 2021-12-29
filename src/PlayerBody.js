import React,{useState} from "react";
import { useDataLayerValue } from "./DataLayer";
import DisplaySong from "./DisplaySong";
import Header from "./Header";
import { Avatar } from "@material-ui/core";
import "./PlayerBody.css";

function PlayerBody({ audioElement,songs,spotify }) {
  const [{current_song_id,tracks,user},dispatch]=useDataLayerValue();
  
  const uri =
  "https://newjams-images.scdn.co/v3/discover-weekly/0iGbL7IWTqD2wa5afwIhCNXABg5ncgn-Q8HqkdESF-npH6DsO8N4Qi0enm9jp3sYvysM4oeKpVFQf2Ag3Wpxt_6zZdAgPxdXx6v-BdtXLbE=/NTM6MjI6NzBUNDAtNDAtMQ==/default";

  // const [{current_playlist_id},dispatch]=useDataLayerValue();
  // const [playlistId,setPlaylistId]=useState('6HDgLbjbJTvvtupht2wqiQ');
    
  // spotify.getPlaylist(playlistId).then(playlist=>playlist.tracks.items?.map(tracks=>tracks) )  ;



  return (
    <div className="player__body">
      <Header />
      <div className="player__center">
        <div className="photo">
          <img src={uri} alt="discover__Weekly" />
        </div>
        <div className="player__center__content">
          <h4>PlayList</h4>
          <h1 className="player__center__title">Discover Weekly</h1>
          <p className="player__center__description"> <Avatar src={user?.images[0].url} alt={user?.display_name} /> <p className="playlist__info"> 4 Songs . 12 Minutes 23 Seconds </p> </p>
        </div>
      </div>
      <div className="songsList">
        {/* {
        spotify.getPlaylist(playlistId).then(playlist=>
         {   playlist.tracks.items?.map(tracks=>{
            return (
              <h2>hi</h2>

            )
          }
        
          ) 
         }  
        )
          
        }
         */}
{
  tracks.map((song,index)=>{
    return <DisplaySong  key={index} track={song} />
  })

}
         


      </div>
    </div>
  );
}

export default PlayerBody;

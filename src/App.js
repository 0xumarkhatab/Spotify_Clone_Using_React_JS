import './App.css';
import Login from './Login';
import {getTokenFromURL} from './spotify';
import { useDataLayerValue } from './DataLayer';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useEffect } from 'react';
const spotify=new SpotifyWebApi();

function App() {

  
    const [{token},dispatch]=useDataLayerValue();
  
    useEffect(()=>{
      const hash=getTokenFromURL();
      window.location.hash="";
      const _token=hash.access_token;
     async function getDetails()
      { 
      if(_token){
        
        spotify.setAccessToken(_token);
        console.log(spotify.getAccessToken());
  
        dispatch({
          type:"SET_TOKEN",
          token:_token,
        });
  
        spotify.getMe().then(User=>{
          console.log(User);
          dispatch({
            type:"SET_USER",
            user:User,
          }
          
          )
        });
        const userId = "loo59cyi386ojsv1svyoexgd2";
  
        spotify.getUserPlaylists(userId).then((plays) => {
          dispatch({
            type: "SET_PLAYLISTS",
            playlists: plays,
          });
          
        });

  
      }
    //   console.log("\nTracks are As Follows");
    //   const playlist_id='1dCpz3xpY0XZhjP2Ouaxr7';
  
    //  console.log( spotify.getPlaylist(playlist_id).then(playlist=>{
    //     return  playlist.tracks.items?.map(track=>track.track);
    //     }) );


  }
  getDetails();
  

    },[]);
    
    

    
  return (
    <div className="App">
      {token? <Player spotify={spotify} />:<Login />}

      

    </div>
  );
}

export default App;

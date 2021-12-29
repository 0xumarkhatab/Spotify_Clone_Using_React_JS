export const initialState={
user:null,
playlists:[],
tracks:[],
token:"",
item:null,
playing:null,
discover__weekly:null,
track_time:0,
current_playlist_id:"",
current_song_id:0,
}


const reducer=(state,action)=>{
   
    console.log(action);
    
    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                user:action.user,
            }

        case  "SET_TOKEN":
            return {
                ...state,
                token:action.token,
            }
            
        case  "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly:action.discover__weekly,

            }
            
        case  "SET_ITEM":
            return {
                ...state,
                item:action.item,
            }
        case  "SET_PLAYLISTS":
            return {
                ...state,
                playlists:action.playlists,
            }
        case "SET_TRACK_ELAPSED":
            return {
                ...state ,
                track_elapsed:action.track_elapsed,
            }
        
        case "SET_TRACK_TIME":
            return {
                ...state ,
                track_time:action.track_time,
            }
        case "SET_CURRENT_PLAYLIST_ID":
            return{
                ...state,
                current_playlist_id:action.current_playlist_id,
            }
        case "SET_CURRENT_SONG_ID":
            return{
                ...state,
                current_song_id:action.current_song_id,
            }
        case "SET_TRACKS":
            return {
                ...state,
                tracks:action.tracks,
            }
        default:
            return {...state}
        
        
             
    }

}

export default reducer;


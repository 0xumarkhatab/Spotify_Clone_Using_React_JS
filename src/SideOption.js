import React from 'react'
import { useDataLayerValue } from './DataLayer';
import './SideOption.css';

function SideOption({playlist,title,Icon,className}) {
    const [{current_playlist_snapshot_id},dispatch]=useDataLayerValue();
    
    function onClickHandler(e){
        // console.clear();
        // console.log(playlist);

        // dispatch({
        //     type:"SET_CURRENT_PLAYLIST__SNAPSHOT_ID",
        //     current_playlist_snapshot_id:playlist.id,
        // });
        
        

    }
    return (
        <div className="sideOption" onClick={onClickHandler}>
            {Icon && <Icon className={"siderOption__icon " + className} /> }
            {Icon? <h4  className="sideOption__title">{title} </h4>:<p className="sideOption__title">{title}</p>}

        </div>
    )
}

export default SideOption

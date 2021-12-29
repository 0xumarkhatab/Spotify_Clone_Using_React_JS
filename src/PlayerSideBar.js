import React from "react";
import "./PlayerSideBar.css";

import HomeIcon from "@material-ui/icons/Home";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import SearchIcon from "@material-ui/icons/Search";
import SideOption from "./SideOption";
import AddBoxIcon from "@material-ui/icons/AddBox";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { useDataLayerValue } from "./DataLayer";

function PlayerSideBar() {
  const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className="player__sidebar">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotify logo"
      />
      <SideOption Icon={HomeIcon} title="Home" />
      <SideOption Icon={SearchIcon} title="Search" />
      <SideOption Icon={LibraryMusicIcon} title="Your Library" />
      <br />
      <SideOption Icon={AddBoxIcon} title="Create Playlist" />
      <SideOption
        className="favorite"
        Icon={FavoriteBorderIcon}
        title="Liked Songs"
      />
      <br />
      <h4 className="sidebar__heading"> Playlist</h4>
      <hr className="hr" />
      {playlists?.items?.map((playlist, index) => {
        return (
          <SideOption key={index} playlist={playlist} title={playlist.name} />
        );
      })}
    </div>
  );
}

export default PlayerSideBar;

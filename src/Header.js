import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { useDataLayerValue } from './DataLayer';
import './Header.css';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function Header() {

    const [{user},dispatch]=useDataLayerValue();

    return (
        <div className="header">
            <div className="header__left">
            <SearchIcon />
            <input
             placeholder="Search For Artists and Songs"
             type="text"
             />
</div>
<div className="header__right">
    <Avatar className="avatar" src={user?.images[0]?.url} alt={user?.display_name} />
    <h4>{user?.display_name}</h4>
    <p><ArrowDropDownIcon /> </p>
</div>

        </div>
    )
}

export default Header

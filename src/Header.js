import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import { AccessTime, HelpOutline, Search } from "@material-ui/icons";

export default function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <Avatar className='header__avatar' alt='Sjoerd Vink' src='' />
        <AccessTime />
      </div>
      <div className='header__search'>
        <Search />
        <input placeholder='Search on Slack' type='text' />
      </div>
      <div className='header__right'>
        <HelpOutline />
      </div>
    </div>
  );
}

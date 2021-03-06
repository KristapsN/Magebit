import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import logo_text from '../../../assets/pineapple_text.svg';
import style from './navigation.module.scss';

export const Nav = () => {
  return (
    <nav className={style.navWrapper}>
      <div className={style.logoWrapper}>
        <NavLink to="/Magebit"><img src={logo} alt=""  /></NavLink>
        <NavLink to="/Magebit"><img src={logo_text} alt="" className={style.logo_text} /></NavLink>
      </div>
      <div className={style.linkWrapper}>
        <NavLink to="/Magebit/#" className={style.navLink}>About</NavLink>
        <NavLink to="/Magebit/#" className={style.navLink}>How it works</NavLink>
        <NavLink to="/Magebit/#" className={style.navLink}>Contacts</NavLink>
      </div>
    </nav>
  );
};
import React from 'react';
import style from './socialIcon.module.scss';
import './iconHover.scss';

type Props = {
  iconName: string;
  colorType: string;
};

export const SocailIcon = ({ iconName, colorType }:Props) => {

  return (
    <a href="/Magebit/#" className={style.link}>
      <div className={`${style.iconWrapper} ${colorType}`}>    
        <i className={`${iconName} ${style.icon}`} />   
      </div>
    </a>
  ); 
};
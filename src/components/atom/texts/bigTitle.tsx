import React from 'react';
import style from './texts.module.scss';

type Props = {
  title: string;
};

export const H1 = ({ title }:Props) => {
  return (
    <>
      <h1 className={style.title}>{title}</h1>
    </>
  );
};

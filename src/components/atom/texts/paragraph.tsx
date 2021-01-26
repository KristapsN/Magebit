import React from 'react';
import style from './texts.module.scss';

type Props = {
  paragraph: string;
};
  
export const Paragraph = ({ paragraph }:Props) => {
  return (
    <>
      <p className={style.paragraph}>{paragraph}</p>
    </>
  );
};

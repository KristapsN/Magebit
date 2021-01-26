import React from 'react';
import { Paragraph } from '../../atom/texts/paragraph';
import { H1 } from '../../atom/texts/bigTitle';
import ic_success from '../../../assets/ic_success.svg';
import style from './textCard.module.scss';


type Props ={
  status: boolean;
};

export const TextCard= ({ status }:Props) => {
  return (
    <>
      {!status ?(
        <div className={style.cardWrapper}>
          <div>
            <H1
              title='Subscribe to newsletter'
            />
            <Paragraph 
              paragraph='Subscribe to our newsletter and get 10% discount on pineapple glasses.'
            />
          </div>
        </div>
      ):( 
        <div className={style.cardSucessWrapper}>
          <div>
            <img 
              src={ic_success} 
              alt="success" 
              className={style.image}
            />
            <H1
              title='Thanks for subscribing!'
            />
            <Paragraph 
              paragraph='You have successfully subscribed to our email listing. Check your email for the discount code.'
            />
          </div>
        </div>
      )}
    </>
  );
};


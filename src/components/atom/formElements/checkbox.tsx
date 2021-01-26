import React from 'react';
import { Link } from 'react-router-dom';
import style from './formElement.module.scss';
import ic_checkmark from '../../../assets/ic_checkmark.svg';

type Props = {
  checkHandler:() => void;
  checked: boolean;
};

export const Checkbox = ({ checkHandler, checked }: Props) => {
  return (
    <div className={style.checkboxWrapper}>
      <div>
        <label 
          htmlFor="check" 
          className={style.checkboxLabel}
        >
          <input 
            type="checkbox" 
            id="check" 
            className={style.checkboxInput} 
            onChange={()=> checkHandler()} 
            checked={checked} 
          />
          <div 
            className={style.newCheckbox}
          > 
            <img src={ic_checkmark} alt="" />
          </div> 
          <span>I agree to </span>  
        </label>
        <Link 
          to="/#" 
          className={style.checkboxLink}
        >
          terms of service
        </Link>
      </div>
    </div>
  );
};
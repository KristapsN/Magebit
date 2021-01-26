import React from 'react';
import { Checkbox } from '../../atom/formElements/checkbox';
import { EmailInput } from '../../atom/formElements/emailInput';
import style from './emailForm.module.scss';

type Props = {
  email: string;
  emailHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  status: boolean;
  error: string;
  checkHandle: () => void;
  checked: boolean;
};

export const EmailForm = ({ email, emailHandler, submitHandler, status, error, checkHandle, checked }: Props) => {
  

  return (
    <>
      {!status &&
      <form onSubmit={submitHandler} className={style.form}>
        <div className={style.hightWrapper}>
          <div className={style.floatingWrapper}>
            <EmailInput 
              email={email}
              emailHandler={emailHandler}
            />
          </div>
        </div>
        { error &&
        <div className={style.errorWrapper}>
          <p>{error}</p>
        </div>} 
        <Checkbox 
          checkHandler={()=>checkHandle()}
          checked={checked}
        />
      </form>}
    </>
  );
};
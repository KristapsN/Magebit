import React, { useState } from 'react';
import { EmailForm } from '../components/organism/form/emailForm';
import { Nav } from '../components/atom/navigation/navigation';
import './home.scss'; 
import { SocailIcon } from '../components/atom/socialIcon/socailIcon';
import { SocailIconList } from '../data/socailIcons';
import { TextCard } from '../components/organism/textCard/textCard';
import { ErrorHandler } from '../helperFunctions/error';

const Home = () => {

  const emailList = [];
  const [error, setError] = useState('');
  const [submitEmail, setSubmitEmail] = useState(false);
  const [email, setEmail] = useState('');
  const [checked, setChecked] = useState(false);

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (ErrorHandler(email, checked)){ 
      setError(ErrorHandler(email, checked));
    } else {    
      emailList.push(email);
      setSubmitEmail(true);
    }
  };
  const checkHandler = () => {
    setChecked(!checked);
  };
 
  return (
    <section>
      <div className="row">
        <div className=" col-xs-12
                col-sm-12
                col-md-4
                col-lg-4 padding--zero"
        >
          <Nav />
          <div className="centerContentWrapper">
            <div className="mobileWrapper">
              <TextCard
                status={submitEmail}
              />
              <EmailForm 
                status={submitEmail}
                email={email}
                emailHandler={(e)=>emailHandler(e)}
                submitHandler={(e) => submitHandler(e)}
                error={error} 
                checkHandle={() => checkHandler()}
                checked={checked}
              /> 
              <hr />   
              <div className="socialIconBlock">
                {SocailIconList.map((item) => 
                  <div key={item.id}>
                    <SocailIcon 
                      iconName={item.name}
                      colorType={item.colorType}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12
                col-sm-12
                col-md-8
                col-lg-8 padding--zero"
        >
          <div className="background" />
        </div>
      </div>
    </section>
  );
};

export default Home;
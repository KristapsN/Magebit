import { ErrorHandler } from '../helperFunctions/error';

describe('Check fi e-mail is valid', () => {
  it('Should not take empty email', () => {
    const summerize = ErrorHandler('', true);
    expect(summerize).toEqual('Email address is required'); 
  });
  it('Should contain @', () => {
    const summerize = ErrorHandler('test.com', true);
    expect(summerize).toEqual('Please provide a valid e-mail address'); 
  });
  it('Should have propper ending like .com', () => {
    const summerize = ErrorHandler('test@test', true);
    expect(summerize).toEqual('Please provide a valid e-mail address'); 
  });
  it('Should have beginning of email adres', () => {
    const summerize = ErrorHandler('t@test', true);
    expect(summerize).toEqual('Please provide a valid e-mail address'); 
  });
  it('Should not accept .co', () => {
    const summerize = ErrorHandler('test@test.co', true);
    expect(summerize).toEqual('We are not accepting subscriptions from Colombia emails'); 
  });
  it('Should accept dots in email begining', () => {
    const summerize = ErrorHandler('test.test@test.com', true);
    expect(summerize).toEqual(''); 
  });
  it('Should have checked checkmark', () => {
    const summerize = ErrorHandler('test@test.com', false);
    expect(summerize).toEqual('You must accept the terms and conditions'); 
  });

});


//   answer = 'Email address is required';
// } else if (!email.match(regEmail)) {
//   answer = 'Please provide a valid e-mail address';
// } else if (email.trimEnd().substr(email.length - 3) === '.co') {
//   answer = 'We are not accepting subscriptions from Colombia emails';
//   return answer;
// } else if (!checked) {
//   answer = 'You must accept the terms and conditions';
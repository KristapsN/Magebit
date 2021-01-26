export const ErrorHandler = (email: string, checked: boolean) => {
  let answer = '';
  const regEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (email === '') {
    answer = 'Email address is required';
  } else if (!email.match(regEmail)) {
    answer = 'Please provide a valid e-mail address';
  } else if (email.trimEnd().substr(email.length - 3) === '.co') {
    answer = 'We are not accepting subscriptions from Colombia emails';
    return answer;
  } else if (!checked) {
    answer = 'You must accept the terms and conditions';
  }
  return answer;
};

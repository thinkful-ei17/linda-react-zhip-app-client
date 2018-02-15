export const required = value =>  
  value !== undefined ? undefined: 'This field is required';

export const notEmpty = value => 
  value.trim() !== '' ? undefined : 'This field must contain some text';

export const correctCharLength = value =>
  value.length === 24 ? undefined : 'This field must be exactly 24 characters long';

export const characterType = value => {
  const makeInteger = parseInt(value, 10);
  if((isNaN(makeInteger))){
    return 'This field only takes numbers'
  }
  else {
    return undefined
  }
}
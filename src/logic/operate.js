import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const one = Big(numberOne);
  const two = Big(numberTwo);
  let result;
  if (operation === '+') result = one + two;
  if (operation === '-') result = one - two;
  if (operation === 'x') result = one * two;
  if (operation === '÷') result = one / two;
  if (operation === '%') result = one * (two / 100);
  return result;
};

export default operate;

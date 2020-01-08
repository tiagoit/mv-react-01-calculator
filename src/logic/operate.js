import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const one = Big(numberOne || 0);
  const two = Big(numberTwo || 0);
  let result;
  if (operation === '+') result = one.plus(two);
  if (operation === '-') result = one.minus(two);
  if (operation === 'x') result = one.times(two);
  if (operation === '÷') result = one.div(two);
  if (operation === '%') result = one.times(two.div(100));
  return result.toString();
};

export default operate;

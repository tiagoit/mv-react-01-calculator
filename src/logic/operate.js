import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const one = Big(numberOne || 0);
  const two = Big(numberTwo || 0);
  let result;
  try {
    if (operation === '+') result = one.plus(two);
    if (operation === '-') result = one.minus(two);
    if (operation === 'x') result = one.times(two);
    if (operation === '÷') result = one.div(two);
    if (operation === '%') result = one.times(two.div(100));
  } catch (error) {
    result = Big(0);
  }
  return result.toString();
};

export default operate;

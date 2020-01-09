import operate from './operate';

const calculate = ({ total, next, operation }, buttonName) => {
  const operations = ['+', '-', 'x', '÷', '%'];
  operation = buttonName;
  if (operations.includes(operation)) {
    total = operate(total, next, operation);
    next = null;
  } else if (buttonName === 'AC') {
    total = 0;
    next = 0;
  } else if (buttonName === '+/-') {
    total *= -1;
    next *= -1;
  } else if (buttonName === '=') {
    next = null;
  }
  return { total, next, operation };
};

export default calculate;

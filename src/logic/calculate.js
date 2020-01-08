import operate from './operate';

const calculate = ({ total, next, operation }, buttonName) => {
  const operations = ['+', '-', 'x', '÷', '%'];

  if (operations.includes(buttonName)) {
    if (total !== null && next !== null && operation) {
      total = operate(total, next, operation);
    } else {
      total = total || next;
      operation = buttonName;
    }
  } else if (buttonName === '=' && total && next && operation) {
    total = operate(total, next, operation);
    operation = null;
  } else if (buttonName === 'AC') {
    total = null;
  } else if (buttonName === '+/-') {
    total = (total || next) * -1;
  }
  next = null;
  return { total, next, operation };
};

export default calculate;

const calculate = ({total, next, operation}, buttonName) => {
  // 'AC', '+/-', '%', '÷', 'x', '-', '+', '='
  let res = {
    operation: buttonName,
  };
  switch (buttonName) {
    case 'AC':
      res.total = 0;
      res.next = 0;
      break;
  
    default:
      break;
  }
};

export default calculate;

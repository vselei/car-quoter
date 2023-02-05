export const getYearDif = year => {
  return new Date().getFullYear() - year;
};

export const calcModel = model => {
  let inc;

  switch (model) {
    case '1':
      inc = 1.3;
      break;
    case '2':
      inc = 1.15;
      break;
    case '3':
      inc = 1.05;
      break;
    default:
      break;
  }

  return inc;
};

export const calcPlan = plan => {
  return plan === '1' ? 1.2 : 1.5;
};

export const moneyFormatter = qty =>
  qty.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'USD'
  });

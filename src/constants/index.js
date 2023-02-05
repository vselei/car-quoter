export const MODELS = [
  {
    id: 1,
    name: 'Europeu'
  },
  {
    id: 2,
    name: 'Americano'
  },
  {
    id: 3,
    name: 'Asiático'
  }
];

const MAX_YEAR = new Date().getFullYear();
export const YEARS = Array.from(
  new Array(20),
  (value, index) => MAX_YEAR - index
);

export const PLANS = [
  {
    id: 1,
    name: 'Básico'
  },
  {
    id: 2,
    name: 'Completo'
  }
];

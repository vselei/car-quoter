import { createContext, useState } from 'react';

import { getYearDif } from '../helpers';

const QuoterContext = createContext();

const QuoterProvider = ({ children }) => {
  const [data, setData] = useState({
    model: '',
    year: '',
    plan: ''
  });
  const [error, setError] = useState('');

  const handleDataChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const insuranceQuoter = () => {
    // Base
    let result = 2000;

    // Diferença de anos
    const yearDif = getYearDif(data.year);

    // Aumento de 3% por ano
    result -= (yearDif * 3 * result) / 100;

    // Europeu 30%
    // Americano 5%
    // Asiático 5%

    // Básico 20%
    // Completo 50%

    console.log('cotando...');
  };

  return (
    <QuoterContext.Provider
      value={{
        data,
        handleDataChange,
        setError,
        error,
        insuranceQuoter
      }}
    >
      {children}
    </QuoterContext.Provider>
  );
};

export { QuoterProvider };

export default QuoterContext;

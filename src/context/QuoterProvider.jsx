import { createContext, useState } from 'react';

const QuoterContext = createContext();

const QuoterProvider = ({ children }) => {
  const [data, setData] = useState({
    model: '',
    year: '',
    plan: ''
  });

  const handleDataChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  return (
    <QuoterContext.Provider
      value={{
        data,
        handleDataChange
      }}
    >
      {children}
    </QuoterContext.Provider>
  );
};

export { QuoterProvider };

export default QuoterContext;

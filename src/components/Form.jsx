import { Fragment } from 'react';
import { MODELS, YEARS, PLANS } from '../constants/index';

import Error from './Error';
import useQuoter from '../hooks/useQuoter';

const Form = () => {
  const { handleDataChange, data, setError, error, insuranceQuoter } =
    useQuoter();

  const handleSubmit = e => {
    e.preventDefault();

    if (Object.values(data).includes('')) {
      setError('Todos os campos são obrigatórios');
      return;
    }

    setError('');

    // TODO: Cotar
    insuranceQuoter();
  };

  return (
    <>
      {error && <Error />}
      <form onSubmit={handleSubmit}>
        <div className="my-5">
          <label
            htmlFor="model"
            className="block mb-3 font-bold text-gray-400 uppercase"
          >
            Modelo
          </label>
          <select
            id="model"
            name="model"
            className="w-full p-3 bg-white border border-gray-200"
            onChange={e => handleDataChange(e)}
            value={data.model}
          >
            <option value="">-- Selecionar Modelo --</option>
            {MODELS.map(model => (
              <option key={model.id} value={model.id}>
                {model.name}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label
            htmlFor="year"
            className="block mb-3 font-bold text-gray-400 uppercase"
          >
            Ano
          </label>
          <select
            id="year"
            name="year"
            className="w-full p-3 bg-white border border-gray-200"
            onChange={e => handleDataChange(e)}
            value={data.year}
          >
            <option value="">-- Selecionar Ano --</option>
            {YEARS.map(year => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <p className="block mb-3 font-bold text-gray-400 uppercase">
            Selecione um Plano
          </p>
          <div className="flex gap-3 items-center">
            {PLANS.map(plan => (
              <Fragment key={plan.id}>
                <label htmlFor={plan.id}>{plan.name}</label>
                <input
                  onChange={e => handleDataChange(e)}
                  id={plan.id}
                  type="radio"
                  name="plan"
                  value={plan.id}
                />
              </Fragment>
            ))}
          </div>
        </div>
        <input
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold"
          value="Cotar"
        />
      </form>
    </>
  );
};

export default Form;

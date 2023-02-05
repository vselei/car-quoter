import { useCallback, useMemo, useRef } from 'react';
import useQuoter from '../hooks/useQuoter';
import { MODELS, PLANS } from '../constants';

const Result = () => {
  const { result, data } = useQuoter();
  const { model, plan, year } = data;
  const yearRef = useRef(year);

  if (result === 0) return null;

  const modelName = useMemo(() => MODELS[model - 1].name, [result]);
  const planName = useMemo(() => PLANS[plan - 1].name, [result]);

  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
      <h2 className="text-gray-600 font-black text-3xl">Resumo</h2>
      <p className="my-2">
        <span className="font-bold">Modelo: </span>
        {modelName}
      </p>
      <p className="my-2">
        <span className="font-bold">Plano: </span>
        {planName}
      </p>
      <p className="my-2">
        <span className="font-bold">Ano: </span>
        {yearRef.current}
      </p>
      <p className="my-2 text-2xl">
        <span className="font-bold">Cotação Total: </span>
        {result}
      </p>
    </div>
  );
};

export default Result;

import useQuoter from '../hooks/useQuoter';
import { MODELS, PLANS } from '../constants';

const Result = () => {
  const { result, data } = useQuoter();
  const { model, plan, year } = data;

  if (result === 0) return null;
  
  const modelName = MODELS[Number(model) - 1].name;
  const planName = PLANS[Number(plan) - 1].name;


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
        {year}
      </p>
      <p className="my-2 text-2xl">
        <span className="font-bold">Cotação Total: </span>
        {result}
      </p>
    </div>
  );
};

export default Result;

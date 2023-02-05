import { QuoterProvider } from './context/QuoterProvider';
import CarQuoter from './components/CarQuoter';

function App() {
  return (
    <QuoterProvider>
      <CarQuoter />
    </QuoterProvider>
  );
}

export default App;

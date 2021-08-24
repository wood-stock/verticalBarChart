import Chart from '../chart';
import { arr1, arr2 } from '../../services/data';

const App = () => (
  <>
    <Chart data={arr1} />
    <Chart data={arr2} />
  </>
);

export default App;

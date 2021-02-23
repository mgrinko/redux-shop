import { Basket } from './Basket';
import { GoodsList } from './GoodsList';

function App() {
  console.log('Rendering App');
  return (
    <div className="App">
      <GoodsList />
      <Basket />
    </div>
  );
}

export default App;

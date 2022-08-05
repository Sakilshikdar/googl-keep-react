import './App.css';
import Home from './component/Home';
import DataProvider from './component/context/DataProvider';

function App() {
  return (
    <DataProvider>
      <Home />
    </DataProvider>
  );
}

export default App;


import './App.css';
import ApiData from './components/ApiData';
import RecepieProvider from './store/Store';
import DisplayData from './components/DisplayData';

function App() {
  return (
    <div className="App">
      <RecepieProvider>
      <ApiData/>
      <DisplayData/>
      </RecepieProvider>
     
    </div>
  );
}

export default App;

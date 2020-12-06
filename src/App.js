import Headers from './Components/Headers';
import './App.css';

function App() {
  const miau = 'Welcome Miau'
  return (
    <div className="App">
      <Headers miau={ miau } />
    </div>
  );
}

export default App;

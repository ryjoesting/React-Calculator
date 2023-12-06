import './styles/App.css';
import Calculator from './Calculator'

function App() {
  return (
    <div className="container" id='app'>
      <h1>Calculator</h1>
      <h4>Built by <a className='grow' href='https://github.com/ryjoesting'>Ryan Joesting</a></h4>
      <Calculator />
    </div>
  );
}

export default App;

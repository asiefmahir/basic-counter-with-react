import './App.css';
import BioData from './components/BioData';
import Counter from './components/Counter'

const names = ["Setu Vai", "Sumit Via", "Foyzul Vai", "Shajal Vai", "Nayem Vai"]

function App() {

  return (
    <div className="App">
      {/* <Counter /> */}
      <BioData
        name = "Mahir Asief"
      />
    </div>
  );
}



export default App;

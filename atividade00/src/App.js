import logo from './logo.svg';
import './App.css';
import MeusDadosProps from './components/02MeusDados';
import Temperatura from './components/03Temperatura';

function App() {
  return (
    <div className="App">
      {//<MeusDadosProps nome = "Antonio Deivid Santos Costa" curso = "Ciência da Computação" universidade = "UFC" />
      }
      <Temperatura />
    </div>
  );
}

export default App;
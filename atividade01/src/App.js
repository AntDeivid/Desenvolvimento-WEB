import logo from './logo.svg';
import './App.css';
import Pai from './components/questao01/01Pai';
import * as PC from './components/02MeuPC';
import * as Batalha from './components/03Batalha';

function App() {
  return (
    <div className="App">
      <Pai />
      <hr />
      <PC.PlacaMae nome = "GigaByte" preco = {1000} />
      <PC.Memoria  nome = "DDR4" preco = {500} />
      <PC.PlacaDeVideo nome = "RTX 3060" preco = {5600} />
      <hr />
      <Batalha.World>
        <Batalha.Arena2>
          
        </Batalha.Arena2>
      </Batalha.World>
    </div>
  );
}

export default App;

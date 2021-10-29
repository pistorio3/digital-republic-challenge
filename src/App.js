import '../src/assets/css/App.css';
import Wall from '../src/components/Wall'

function App() {
  return (
    <div className="App">
      <h1>Digital Republic Challenge</h1>
      <h2>Paint Calculator</h2>
     
     <div className="container-inputs">
        <div className="input-measure">
          <Wall numberWall={1}></Wall>
        </div>

        <div className="input-measure">
          <Wall numberWall={2}></Wall>
        </div>

        <div className="input-measure">
          <Wall numberWall={3}></Wall>
        </div>

        <div className="input-measure">
          <Wall numberWall={4}></Wall>
        </div>

        <button>Calcular</button>

        <h3>Observação: todas as medidas devem ser fornecidas em metros</h3>
     </div>
    </div>
  );
}

export default App;

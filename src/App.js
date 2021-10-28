import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Digital Republic Challenge</h1>
      <h2>Paint Calculator</h2>
     
     <div className="container-inputs">
        <div className="input-measure">
          <h5>Parede 1</h5>
          <label htmlFor="wallone">
            Parede 1
            <input id="wallone" className="input-wall" type="number" placeholder="0.00"/>
          </label>
         
          <label htmlFor="doorone" >
            Portas
            <input id="doorsone" className="input-door-window" type="number" placeholder="0"/>
          </label>

          <label htmlFor="windowone" >
            Janelas
            <input id="windowsone" className="input-door-window" type="number" placeholder="0"/>
          </label>
       </div>

       <div className="input-measure">
          <h5>Parede 2</h5>
          <label htmlFor="walltwo">
            Parede 2
            <input id="walltwo" className="input-wall" type="number" placeholder="0.00"/>
          </label>
         
          <label htmlFor="doortwo" >
            Portas
            <input id="doorstwo" className="input-door-window" type="number" placeholder="0"/>
          </label>

          <label htmlFor="windowtwo" >
            Janelas
            <input id="windowstwo" className="input-door-window" type="number" placeholder="0"/>
          </label>
        </div>

        <div className="input-measure">
          <h5>Parede 3</h5>
          <label htmlFor="wallthree">
            Parede 3
            <input id="wallthree" className="input-wall" type="number" placeholder="0.00"/>
          </label>
         
          <label htmlFor="doorthree" >
            Portas
            <input id="doorsthree" className="input-door-window" type="number" placeholder="0"/>
          </label>

          <label htmlFor="windowthree" >
            Janelas
            <input id="windowsthree" className="input-door-window" type="number" placeholder="0"/>
          </label>
        </div>

        <div className="input-measure">
          <h5>Parede 4</h5>
          <label htmlFor="wallfour">
            Parede 4
            <input id="wallfour" className="input-wall" type="number" placeholder="0.00"/>
          </label>
         
          <label htmlFor="doorfour" >
            Portas
            <input id="doorsfour" className="input-door-window" type="number" placeholder="0"/>
          </label>

          <label htmlFor="windowfour" >
            Janelas
            <input id="windowsfour" className="input-door-window" type="number" placeholder="0"/>
          </label>
        </div>

        <button>Calcular</button>

        <h3>Observação: todas as medidas devem ser fornecidas em metros</h3>
     </div>
    </div>
  );
}

export default App;

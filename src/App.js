import './App.css';
import {useState} from 'react';

function App() {

  const [dis, setDis] = useState('');

  function Tecla({value}){
    const identificarClick = ()=>{
      if (value === 'C'){
        setDis('')
      }
      else if (value === "=") {
        try {
          setDis(eval(dis).toString()); // Calcula a expressão
        } catch {
          setDis("Erro");
        }}
      else{
        setDis((prev)=>prev+value)
      }
    }
    return(
      <button className='bt' onClick={identificarClick}>{value}</button>
    )
  }
  return (
    <div className="geral">
      <div className='display'>
        {dis}
      </div>
      <div className='teclado'>
      <div className='teclas'>
          <Tecla value="1"/>
          <Tecla value="2"/>
          <Tecla value="3"/>
          <Tecla value="+"/>
        </div>
        <div className='teclas'>
          <Tecla value="4"/>
          <Tecla value="5"/>
          <Tecla value="6"/>
          <Tecla value="-"/>
        </div>
        <div className='teclas'>
          <Tecla value="7"/>
          <Tecla value="8"/>
          <Tecla value="9"/>
          <Tecla value="*"/>
        </div>
        <div className='teclas'>
          <Tecla value="C"/>
          <Tecla value="0"/>
          <Tecla value="="/>
          <Tecla value="/"/>
        </div>
      </div>

    </div>
  );
}

export default App;

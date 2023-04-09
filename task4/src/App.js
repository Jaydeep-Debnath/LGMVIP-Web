import './App.css';
import { useState } from 'react';

function App() {
  const [result, setResult] = useState('');
  
  const click = (o) => {
    setResult(result.concat(o.target.name));
  }
  const clear=()=>{
    setResult("");
  }
  const Delete=()=>{
    setResult(result.slice(0,-1));
  }
  const percent=()=>{
    setResult(result/100);
  }
  const calculate=()=>{
    try{
        setResult(eval(result).toString());
    }
    catch(err){
        setResult("Error")
    }
  }

  return (
    <div className="App">
      <div className=" calculator w-auto text-white font-bold my-36 bg-stone-700 p-12 rounded-xl">
            <form className=" flex text-center text-lg" >
                <input className=" text-right text-lg p-8 w-full h-20 mb-8 bg-gray-800 rounded-md" type="text" value={result} />
            </form>
            
            <div className=" grid grid-cols-4 rounded-lg text-xl " id='keypad' >
                <button type="submit" onClick={clear} className=" bg-rose-500 hover:bg-rose-700 text-black  m-1 rounded-md " id="clear">AC</button>
                <button type="submit" onClick={Delete} className=" bg-rose-500 hover:bg-rose-700 text-black h-10 m-1 w-16 rounded-md " id="Delete">DE</button>
                <button type="submit" name="%" onClick={percent} className=" bg-violet-500 hover:bg-violet-700 h-10 m-1 w-16 rounded-md ">%</button>
                <button type="submit" name="/" onClick={click} className=" bg-violet-500 hover:bg-violet-700 h-10 m-1 w-16 rounded-md ">&divide;</button>
                <button type="submit" name="7" onClick={click} className=" bg-gray-600 hover:bg-gray-400 h-10 m-1 w-16 rounded-md   ">7</button>
                <button type="submit" name="8" onClick={click} className=" bg-gray-600 hover:bg-gray-400 h-10 m-1 w-16 rounded-md   ">8</button>
                <button type="submit" name="9" onClick={click} className=" bg-gray-600 hover:bg-gray-400 h-10 m-1 w-16 rounded-md   ">9</button>
                <button type="submit" name="*" onClick={click} className=" bg-violet-500 hover:bg-violet-700 h-10 m-1 w-16 rounded-md ">&times;</button>
                <button type="submit" name="4" onClick={click} className=" bg-gray-600 hover:bg-gray-400 h-10 m-1 w-16 rounded-md   ">4</button>
                <button type="submit" name="5" onClick={click} className=" bg-gray-600 hover:bg-gray-400 h-10 m-1 w-16 rounded-md   ">5</button>
                <button type="submit" name="6" onClick={click} className=" bg-gray-600 hover:bg-gray-400 h-10 m-1 w-16 rounded-md   ">6</button>
                <button type="submit" name="-" onClick={click} className=" bg-violet-500 hover:bg-violet-700 h-10 m-1 w-16 rounded-md ">&ndash;</button>
                <button type="submit" name="1" onClick={click} className=" bg-gray-600 hover:bg-gray-400 h-10 m-1 w-16 rounded-md   ">1</button>
                <button type="submit" name="2" onClick={click} className=" bg-gray-600 hover:bg-gray-400 h-10 m-1 w-16 rounded-md   ">2</button>
                <button type="submit" name="3" onClick={click} className=" bg-gray-600 hover:bg-gray-400 h-10 m-1 w-16 rounded-md   ">3</button>
                <button type="submit" name="+" onClick={click} className=" bg-violet-500 hover:bg-violet-700 h-10 m-1 w-16 rounded-md ">+</button>
                <button type="submit" name="00" onClick={click} className=" bg-gray-600 hover:bg-gray-400 h-10 m-1 w-16 rounded-md   ">00</button>
                <button type="submit" name="0" onClick={click} className=" bg-gray-600 hover:bg-gray-400 h-10 m-1 w-16 rounded-md   ">0</button>
                <button type="submit" name="." onClick={click} className=" bg-gray-600 hover:bg-gray-400 h-10 m-1 w-16 rounded-md   ">.</button>
                <button type="submit" onClick={calculate } className=" bg-rose-500 hover:bg-rose-700 text-black m-1 rounded-md  " id="equal">=</button>
            </div>
        </div>
    </div>
  );
}

export default App;

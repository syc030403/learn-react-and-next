import { useState, useEffect, useRef } from 'react';
import './App.css';
import Controller from './components/controller';
import Viewer from './components/viewer';
import Even from "./components/Even";
import useUpdate from './Hooks/useUpdate';
import useInput from './Hooks/useInput';


function App() {

  const [count, setCount] = useState(0);
  const [text, onChangeText] = useInput();
  
  useUpdate(()=>{
    console.log('APP 컴포넌트 업데이트')
  });

  useEffect(() => {
    console.log("마운트");
  },
  []
);

 
  const onClickButton = (value)=>{
    setCount(count + value);
  }

  
  
  return(
    <div className="App">
      <h1>Simple Counter</h1>
        <section>
          <input value={text} onChange={onChangeText}/>
        </section>
      <section>
        <Viewer count={count}/>
        {count % 2 === 0 && <Even/>}
      </section>
       <section>
        <Controller onClickButton={onClickButton}/>
       </section>
    </div>
  )
}

export default App

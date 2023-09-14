import{useState} from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  const setCount =()=>{
  setCounter(counter + 1);
};
  
  return(// 리턴 안에는 무조건 하나의 함수가 들어가야됨
  <div>
    <h1>Total clicks: {counter}</h1>
    <button onClick={setCount}>Click!</button>
  </div>
  );
}

export default App;

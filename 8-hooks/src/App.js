import{useState} from "react";
// 플러스 마이너스 버튼
const Button = ({text, click}) => {
  return <button onClick={click}>{text}</button>;
}

const App = () => {
  const [counter, setCounter, setCounter1] = useState(0);

  const plus =()=>{
  setCounter(counter + 1);
  };
  const minus =()=>{
    setCounter(counter - 1);
  };

  
  return(// 리턴 안에는 무조건 하나의 함수가 들어가야됨
  <div>
    <h1>Total clicks: {counter}</h1>
    <Button text="+1" click={plus}></Button>
    <Button text="-1" click={minus}></Button>
    {/* <button onClick={plus}>+1</button>
    <button onClick={minus}>-1</button> */}
  </div>
  );
};

export default App;

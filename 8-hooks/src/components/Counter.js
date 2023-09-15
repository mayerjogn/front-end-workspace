import{useState, useEffect} from "react";
import propTypes from "prop-types";
// 플러스 마이너스 버튼
const Button = ({text, click}) => {
  return <button onClick={click}>{text}</button>;
};

Button.propTypes={
  text: propTypes.string.isRequired, // isRequired 필수값
  click: propTypes.func.isRequired, // func 함수약자
};

const Counter = () => {
  const [counter, setCounter, setCounter1] = useState(0);

  const plus =()=>{
  setCounter(counter + 1);
  };
  const minus =()=>{
    setCounter(counter - 1);
  };
  console.log("always~~")

  useEffect(()=>{console.log("useEffect~~")},[]);
  useEffect(()=>{console.log("counter change~~")},[counter]);
  
  return(// 리턴 안에는 무조건 하나의 함수가 들어가야됨 마지막에 , 찍으면 가독성있게 정리해주는데 왜안됨
  <div>
    <h1 style={{backgroundColor: "pink", color :"skyblue",}}>Total clicks: {counter}</h1> 
    <Button text="+1" click={plus}></Button>
    <Button text="-1" click={minus}></Button>
    {/* <button onClick={plus}>+1</button>
    <button onClick={minus}>-1</button> */}
  </div>
  );
};

export default Counter;

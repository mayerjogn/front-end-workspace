import { useState } from "react";
//보류

const Counter = ()=>{

    const [따봉,따봉변경] = useState(0);

    const good =() =>{
       따봉변경(따봉+1);
    }

    return(
        <>
        <span onClick={good}>👍{따봉}</span>
        </>
    )
};
export default Counter;
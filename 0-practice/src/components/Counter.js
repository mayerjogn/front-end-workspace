import { useState } from 'react';
import React from 'react';
import styled from 'styled-components';
//보류

const StyledLikeBtn = styled.button`
    display: flex;
    flex-direction: column;
    width: 100px;
    height: auto;
    padding: 10px;
    font-size: 1em;
    color: grey;
    font-size: 1.07em;
    word-break: keep-all;
    background-color: antiquewhite;
    border: 0;
    border-radius: 6px;
    align-items: center;
`;

// const Btn = ({ text, click }) => {
//     return <button onClick={click}>{text}</button>;
// };

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const plus = () => {
        setCounter(counter + 1);
        alert('코하하하하');
    };
    return (
        <StyledLikeBtn>
            <div type="button" style={{ border: 'none', backgroundColor: 'antiquewhite' }} onClick={plus}>
                코하하👍
            </div>
            <span style={{ color: '#ff7f38' }}>{counter}</span>
        </StyledLikeBtn>
    );
};
export default Counter;

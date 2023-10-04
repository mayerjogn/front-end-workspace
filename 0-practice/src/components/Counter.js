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
    color: black;
    word-break: keep-all;
    background-color: rgb(0 0 0 / 5%);
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
    };
    return (
        <StyledLikeBtn>
            <button style={{ border: 'none' }} onClick={plus}>
                코하하👍
            </button>
            <span>{counter}</span>
        </StyledLikeBtn>
    );
};
export default Counter;

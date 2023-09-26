import { connect, useSelector, useDispatch } from 'react-redux';
import { decrease, increase } from '../store/modules/counter';

const Button = ({ text, click }) => {
    return <button onClick={click}>{text}</button>;
};

const Counter = () => {
    const counter = useSelector((state) => state.counter.counter);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Total clicks: {counter}</h1>
            <Button text="+1" click={() => dispatch(increase())}></Button>
            <Button text="-1" click={() => dispatch(decrease())}></Button>
        </div>
    );
};
// const mapStateToProps = (state) => ({
//     counter: state.counter.counter,
// });

// const mapDispatchToProps = (dispatch) => ({
//     increase: () => {
//         console.log('increase');
//         dispatch(increase());
//     },
//     decrease: () => {
//         console.log('decrease');
//         dispatch(decrease());
//     },
// });

// connect(mapStateToProps, mapDispatchToProps)(연동할 컴포넌트) 홀서빙
export default Counter;
// connect(mapStateToProps, mapDispatchToProps)(Counter);

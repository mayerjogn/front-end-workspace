import { createAction, handleActions } from 'redux-actions';

// 1. 액션(Action) : 프로젝트의 상태에 변화를 일으키는 것 ex) 만들어놓은 plus나 minus같은
// ACtion은 보통 대문자로 지정함 주문서
// 액션 타입을 정의한것
const INCREASE = 'counter/INCREASE'; // 모듈 이름 추가하고
const DECREASE = 'counter/DECREASE';

// 2. 액션 생성 함수 (action creator) : 액션 객체를 만들어 주는 함수
// 함수명은 대부분 소문자로 액션에서 가져옴
// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });

// createAction을 사용하면 더욱 간단하게 액션 생성 함수 선언 가능
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 3. 리듀서(reducer) : 변화를 일으키는 함수
// 초기값 설정 자유임 useState느낌 요리사
const initalState = {
    counter: 0,
};
// 4. 리듀서 함수 정의 요리
// const counter = (state = initalState, action) => {
//     switch (action.type) {
//         case INCREASE:
//             return {
//                 counter: state.counter + 1,
//             };
//         case DECREASE:
//             return {
//                 counter: state.counter - 1,
//             };
//         default:
//             return state;
//     }
// };

const counter = handleActions(
    {
        [INCREASE]: (state, action) => ({ counter: state.counter + 1 }),
        [DECREASE]: (state, action) => ({ counter: state.counter - 1 }),
    },
    initalState
);
export default counter;

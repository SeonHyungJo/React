// Imports
// 여기는 임포트라고 해놓고 아무 것도 안적었네

// Actions
// 행위를 정의 즉....데이터에 직접 접근을 변경할 수 없다.
// 여기서는 액션 타입을 구분해준다.
const START_TIMER = "START_TIMER";
const RESTART_TIMER = "RESTART_TIMER";
const ADD_SECOND = "ADD_SECOND";

// Action Creators
// 실질적 행동에 대한 타입 변경
function startTimer() {
  return {
    type: START_TIMER
  };
}

function restartTimer() {
  return {
    type: RESTART_TIMER
  };
}

function addSecond() {
  return {
    type: ADD_SECOND
  };
}

// Reducer
// 여기가 핵심 데이터가 있는 곳 

const TIMER_DURATION = 180;

// 기본값 state
const initialState = {
  isPlaying: false,
  elapsedTime: 0,
  timerDuration: TIMER_DURATION
};

//기본 reducer 정의 나머지 func를 행위로 정의하는 건가??
function reducer(state = initialState, action) {
  switch (action.type) {
    case START_TIMER:
      return applyStartTimer(state, action);
    case RESTART_TIMER:
      return applyRestartTimer(state, action);
    case ADD_SECOND:
      return applyAddSecond(state, action);
    default:
      return state;
  }
}

// Reducer Functions

function applyStartTimer(state, action) {
  return {
    ...state,
    isPlaying: true,
    elapsedTime: 0
  };
}

function applyRestartTimer(state, action) {
  return {
    ...state,
    isPlaying: false,
    elapsedTime: 0
  };
}

function applyAddSecond(state, action) {
  const { elapsedTime } = state;
  if (elapsedTime < TIMER_DURATION) {
    return {
      ...state,
      elapsedTime: elapsedTime + 1
    };
  } else {
    return {
      ...state,
      isPlaying: false
    };
  }
}

// Exports

const actionCreators = {
  startTimer,
  restartTimer,
  addSecond
};
export { actionCreators };

// Default

export default reducer;

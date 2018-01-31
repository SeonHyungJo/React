import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as tomatoActions } from "../reducer";
import Main from "./main";


// reducer에서 가져오면 변수를 가져오는 func
function mapStateToProps(state) {
  const { isPlaying, elapsedTime, timerDuration } = state;

  return {
    isPlaying,
    elapsedTime,
    timerDuration
  };
}

// reducer에서 가져오면 행위를 가져오는 func
function mapDispatchToProps(dispatch) {
  return {
    startTimer: bindActionCreators(tomatoActions.startTimer, dispatch),
    restartTimer: bindActionCreators(tomatoActions.restartTimer, dispatch),
    addSecond: bindActionCreators(tomatoActions.addSecond, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);

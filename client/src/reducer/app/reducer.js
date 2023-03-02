import {
  GET_RANDOM_WORD_LOADING,
  GET_RANDOM_WORD_SUCCESS,
  GET_RANDOM_WORD_ERROR,
  CHANGE_SCORE,
  GET_SCORE,
} from "./actionTypes";

const initState = {
  isLoading: false,
  isError: false,
  currentUser: "",
  word: "",
  score: 0,
  timeout: 30,
};

const reducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_RANDOM_WORD_LOADING: {
      return { ...state, isLoading: true };
    }
    case GET_RANDOM_WORD_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        currentUser: payload.user,
        timeout: payload.timeout,
        word: payload.word,
      };
    }
    case GET_RANDOM_WORD_ERROR: {
      return { ...state, isLoading: false, isError: true };
    }
    case CHANGE_SCORE: {
      return { ...initState, score: state.score + payload };
    }
    case GET_SCORE: {
      return { ...state, score: payload };
    }
    default:
      return state;
  }
};

export { reducer };

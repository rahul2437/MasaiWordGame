import {
  CHANGE_SCORE,
  GET_RANDOM_WORD_ERROR,
  GET_RANDOM_WORD_LOADING,
  GET_RANDOM_WORD_SUCCESS,
} from "./actionTypes";

const getRandomWord = (payload) => (dispatch) => {
  const url = `http://localhost:8080/randomwords`;
  dispatch({ type: GET_RANDOM_WORD_LOADING });
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: GET_RANDOM_WORD_SUCCESS,
        payload: {
          user: payload.name,
          timeout: payload.level,
          word: data.word,
        },
      });
    })
    .catch((err) => dispatch({ type: GET_RANDOM_WORD_ERROR }));
};

const updateScore = (payload) => (dispatch) => {
  const url = `http://localhost:8080/scores`;
  fetch(url, {
    method: "POST",
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: CHANGE_SCORE, payload: payload.score });
    })
    .catch((err) => dispatch({ type: GET_RANDOM_WORD_ERROR }));
};

export { getRandomWord, updateScore };

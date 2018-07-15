import guessedWords from "./guessedWordsReducer";
import { combineReducers } from "redux";
import success from "./successReducer";
import secretWord from "../reducers/secretWordReducer";

// ./secretWordsReducer";

export default combineReducers({
  guessedWords,
  secretWord,
  success
});

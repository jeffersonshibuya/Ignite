import { combineReducers } from "redux";
import { gameDetailReducer } from "./gameDetailReducer";
import { gamesReducer } from "./gamesReducer";


export const rootReducer = combineReducers({
  games: gamesReducer, 
  detail: gameDetailReducer,
})
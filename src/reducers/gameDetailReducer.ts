
const initialState = {
  game: {},
  screen: {},
  isLoading: true
}

const actionState = {
  type: "",
  payload: {
     game: {}, 
     screen: {}
  }
}

export const gameDetailReducer = (state = initialState, action = actionState) => {
  switch(action.type) {
    case 'GET_GAME_DETAIL':
      return {
        ...state, 
        game: action.payload.game,
        screen: action.payload.screen,
        isLoading: false
      }
    case "LOADING_DETAIL":
      return {
        ...state,
        isLoading: true
      }
    default:
      return {...state}
  }

}

const initialState = {
  game: {},
  screen: {}
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
        screen: action.payload.screen
      }
    default:
      return {...state}
  }

}
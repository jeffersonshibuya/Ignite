const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
  isLoading: true
}

export const gamesReducer = (state = initState, action: {type: string, payload: any}) => {
  switch(action.type) {
    case 'FETCH_GAMES':
      return {
        ...state, 
        popular: action.payload.popular, 
        newGames: action.payload.newGames,
        upcoming: action.payload.upcoming,
        isLoading: false
      }
    case 'FETCH_SEARCHED':
      return {
        ...state,
        searched: action.payload.searched,
        isLoading: false
      }
    case 'CLEAR_SEARCHED':
      return {
        ...state,
        searched: []
      }
    case "LOADING_GAMES":
      return {
        ...state,
        isLoading: true
      }
    default:
      return {...state}
  }
}
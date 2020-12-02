const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: []
}

export const gamesReducer = (state = initState, action: {type: string, payload: any}) => {
  switch(action.type) {
    case 'FETCH_GAMES':
      return {
        ...state, 
        popular: action.payload.popular, 
        newGames: action.payload.newGames,
        upcoming: action.payload.upcoming
      }
    default:
      return {...state}
  }
}
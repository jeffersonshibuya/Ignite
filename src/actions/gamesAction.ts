import api from "../services/api"
import { newGamesUrl, popularGamesUrl, searchGameUrl, upcomingGamesUrl } from '../services/endpoints'


export const loadGames = () => async (dispatch: any) =>{
  const popularGamesData = await api.get(popularGamesUrl)
  const newGamesData = await api.get(newGamesUrl)
  const upcomingGamesData = await api.get(upcomingGamesUrl)
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularGamesData.data.results,
      newGames: newGamesData.data.results,
      upcoming: upcomingGamesData.data.results
    }
  },)
}

export const fetchSearch = (game_name: string) => async (dispatch: any) => {
  const searchedData = await api.get(searchGameUrl(game_name));

  dispatch({
    type: 'FETCH_SEARCHED',
    payload: {
      searched: searchedData.data.results
    }
  })
}
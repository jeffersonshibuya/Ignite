import api from "../services/api"
import { newGamesUrl, popularGamesUrl, upcomingGamesUrl } from '../services/endpoints'


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
  })
}
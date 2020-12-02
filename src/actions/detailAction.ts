import api from "../services/api";
import { getGameDetailUrl, getScreenShtosUrl } from "../services/endpoints";

export const loadDetail = (id: number) => async(dispatch: any) => {

  dispatch({
    type: 'LOADING_DETAIL'
  })

  const detailData = await api.get(getGameDetailUrl(id));
  const screensShotsData = await api.get(getScreenShtosUrl(id));

  dispatch({
    type: "GET_GAME_DETAIL",
    payload: {
      game: detailData.data,
      screen: screensShotsData.data
    }
  })
}
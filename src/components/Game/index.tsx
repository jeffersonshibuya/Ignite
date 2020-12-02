import React from 'react';
import { useDispatch } from 'react-redux';
import { loadDetail } from '../../actions/detailAction';
import { StyledGame } from './styles';


const Game: React.FC<any> = (game) => {
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(game.id))
  }
  return (
    <StyledGame onClick={loadDetailHandler}>
      <h3>{game.name}</h3>
      <p>{game.released}</p>
      <img src={game.background_image} alt={game.name}/>
    </StyledGame>
  )
}

export default Game;
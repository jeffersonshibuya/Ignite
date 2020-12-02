import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadDetail } from '../../actions/detailAction';
import { smallImage } from '../../util/resizingImage';
import { StyledGame } from './styles';


const Game: React.FC<any> = (game) => {
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden"
    dispatch(loadDetail(game.id))
  }
  return (
    <StyledGame onClick={loadDetailHandler}>
      <Link to={`/game/${game.id}`}>
        <h3>{game.name}</h3>
        <p>{game.released}</p>
        <img src={smallImage(game.background_image, 640)} alt={game.name}/>
      </Link>
    </StyledGame>
  )
}

export default Game;
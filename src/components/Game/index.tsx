import { motion } from 'framer-motion';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadDetail } from '../../actions/detailAction';
import { popup } from '../../util/animations';
import { smallImage } from '../../util/resizingImage';
import { StyledGame } from './styles';

const Game: React.FC<any> = (game) => {
  const stringPathId = game.id.toString();
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden"
    dispatch(loadDetail(game.id))
  }
  return (
    <StyledGame variants={popup} initial='hidden' animate='show' 
      layoutId={stringPathId} onClick={loadDetailHandler}>
      <Link to={`/game/${game.id}`}>
        <motion.h3 layoutId={`title ${stringPathId}`}>{game.name}</motion.h3>
        <p>{game.released}</p>
        <motion.img layoutId={`image ${stringPathId}`} src={smallImage(game.background_image, 640)} alt={game.name}/>
      </Link>
    </StyledGame>
  )
}

export default Game;
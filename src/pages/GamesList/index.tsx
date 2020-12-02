import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { loadGames } from '../../actions/gamesAction';
import Game from '../../components/Game';
import GameDetail from '../../components/GameDetail';
import { fadeIn } from '../../util/animations';
import { GameListStyle, Games } from './styles';

interface RootState {
  games: {
    popular: [],
    newGames: [],
    upcoming: [],
    searched: []
  }
}

const GamesList: React.FC = () => {
  const {pathname} = useLocation()
  const pathId = pathname.split('/')[2]
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames())
  }, [dispatch])
  // Get data back
  const { popular, newGames, upcoming, searched } = useSelector((state: RootState) => state.games)
  return (
    <GameListStyle variants={fadeIn} initial='hidden' animate='show'>
      <AnimateSharedLayout type="crossfade">
          <AnimatePresence>
            {pathId && <GameDetail pathId={pathId}/> }
          </AnimatePresence>
          {searched.length ? (
            <div className="searched">
              <h2>Searched Games</h2>
              <Games>
                {searched.map((game:any) => (
                  <Game {...game} key={game.id}/>
                ))}
              </Games>  
            </div>
          ) : ""}
          <h2>Upcoming Games</h2>
          <Games>
            {upcoming.map((game:any) => (
              <Game {...game} key={game.id}/>
            ))}
          </Games>
          <h2>Popular Games</h2>
          <Games>
            {popular.map((game:any) => (
              <Game {...game} key={game.id}/>
            ))}
          </Games>
          <h2>New Games</h2>
          <Games>
            {newGames.map((game:any) => (
              <Game {...game} key={game.id}/>
            ))}
          </Games>
      </AnimateSharedLayout>
    </GameListStyle>
  )
}

export default GamesList;
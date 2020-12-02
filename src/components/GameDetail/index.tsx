import React from 'react';
import { useSelector } from 'react-redux';
import { CardShadow, Detail } from './styles';

// import { Container } from './styles';

const GameDetail: React.FC = () => {
  const { game, screen } = useSelector((state:any) => state.detail);
  return (
    <CardShadow>
      <Detail>
        <div className="stats">
          <div className="rating">
            <h3>{game.name}</h3>
            <p>Rating: {game.rating}</p>
          </div>
          <div className="info">
            <h3>Platforms</h3>
            <div className="platforms">
              {game.platforms?.map((data:any) => (
                <h3 key={data.platform.id}>{data.platform.name}</h3>
              ))}
            </div>
          </div>
        </div>
        <div className="media">
          <img src={game.background_image} alt={game.name}/>
        </div>
        <div className="description">
          <p>{game.description_raw}</p>
        </div>
        <div className="gallery">
          {screen.results?.map((screen: {id: number, image: string}) => (
            <img key={screen.id} src={screen.image} alt={screen.image}/>
          ))}
        </div>
      </Detail>
    </CardShadow>
  )
}

export default GameDetail;
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { CardShadow, Description, Detail, Info, Media, Platforms, Stats } from './styles';

// import { Container } from './styles';

const GameDetail: React.FC = () => {
  const history = useHistory();

  const exitDetailHandler = (e: any) => {
    const element = e.target;
    if(element.classList.contains('shadow')) {
      document.body.style.overflow = 'auto';
      history.push('/')
    }
  }
  const { game, screen, isLoading } = useSelector((state:any) => state.detail);
  return (
    <>
    {!isLoading && (
      <CardShadow className="shadow" onClick={exitDetailHandler}>
        <Detail>
          <Stats>
            <div className="rating">
              <h3>{game.name}</h3>
              <p>Rating: {game.rating}</p>
            </div>
            <Info>
              <h3>Platforms</h3>
              <Platforms>
                {game.platforms?.map((data:any) => (
                  <h3 key={data.platform.id}>{data.platform.name}</h3>
                ))}
              </Platforms>
            </Info>
          </Stats>
          <Media>
            <img src={game.background_image} alt={game.name}/>
          </Media>
          <Description>
            <p>{game.description_raw}</p>
          </Description>
          <div className="gallery">
            {screen.results?.map((screen: {id: number, image: string}) => (
              <img key={screen.id} src={screen.image} alt={screen.image}/>
            ))}
          </div>
        </Detail>
      </CardShadow>
    )
    }
    
    </>
  )
}

export default GameDetail;
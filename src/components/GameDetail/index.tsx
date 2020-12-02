import { motion } from 'framer-motion';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import android from '../../img/android.svg';
import apple from '../../img/apple.svg';
import gamepad from '../../img/gamepad.svg';
import nintendo from '../../img/nintendo.svg';
import playstation4 from '../../img/ps4.svg';
import playstation5 from '../../img/ps5.svg';
import starEmpty from '../../img/star-empty.png';
import starFull from '../../img/star-full.png';
import steam from '../../img/steam.svg';
import xbox from '../../img/xbox.svg';
import { smallImage } from '../../util/resizingImage';
import Loading from '../Loading';
import { CardShadow, Description, Detail, Info, Media, Platforms, Stats } from './styles';




// import { Container } from './styles';

const GameDetail: React.FC<{pathId: string}> = ({pathId}) => {
  const history = useHistory();
  const { game, screen, isLoading } = useSelector((state:any) => state.detail);

  const exitDetailHandler = (e: any) => {
    const element = e.target;
    if(element.classList.contains('shadow')) {
      document.body.style.overflow = 'auto';
      history.push('/')
    }
  }

  // Get Platform images
  const getPlatform = (platform: string) => {
    switch(platform) {
      case 'PlayStation 4':
        return playstation4;
      case 'PlayStation 5':
          return playstation5;
      case 'Xbox One':
        return xbox;
      case 'PC':
        return steam;
      case 'Nintendo Switch':
        return nintendo;
      case 'iOS':
        return apple;
      case 'Android':
        return android;
      default:
        return gamepad
    }
  }

  // Get starts
  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating)
    for(let i = 1; i <= 5; i++) {
      if(i <= rating) {
        stars.push(<img src={starFull} alt="star" key={i} />)
      } else {
        stars.push(<img src={starEmpty} alt="star" key={i} />)
      }
    }
    return stars;
  }


  return (
    <>
    {isLoading? <Loading /> : (
      <CardShadow className="shadow" onClick={exitDetailHandler}>
        <Detail layoutId={pathId}>
          <Stats>
            <div className="rating">
              <motion.h3 layoutId={`title ${pathId}`}> {game.name}</motion.h3>
              <p>Rating: </p>
              {getStars()}
            </div>
            <Info>
              <h3>Platforms</h3>
              <Platforms>
                {game.platforms?.map((data:any) => (
                  <img src={getPlatform(data.platform.name)} key={data.platform.id} alt={data.platform.name} />
                ))}
              </Platforms>
            </Info>
          </Stats>
          <Media>
            <motion.img layoutId={`image ${pathId}`} src={game.background_image} alt={game.name}/>
          </Media>
          <Description>
            <p>{game.description_raw}</p>
          </Description>
          <div className="gallery">
            {screen.results?.map((screen: {id: number, image: string}) => (
              <img key={screen.id} src={smallImage(screen.image, 1280)} alt={screen.image}/>
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

import React from 'react';
import { fadeIn } from '../../util/animations';
import { Loader, LoaderContainer, LoadingStyle } from './styles';

const loaderVariants = {
  animationOne: {
    x: [5, 5],
    y: [20, -5],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5
      },
      y: {
        yoyo: Infinity,
        duration: 0.5,
        ease: 'easeInOut'
      }
    }
  },
  animationTwo: {
    x: [7, 7],
    y: [20, -5],
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.5,
        ease: 'easeInOut',
        delay: 0.1,
      }
    }
  },
  animationThree: {
    x: [7, 7],
    y: [20, -5],
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.5,
        ease: 'easeInOut',
        delay: 0.2,
      }
    }
  },
}


const Loading: React.FC = () => {
  return (
    <LoadingStyle variants={fadeIn} initial='hidden' animate='show'>
      <LoaderContainer >
        Loading
        <Loader variants={loaderVariants} animate='animationOne'></Loader>
        <Loader variants={loaderVariants} animate='animationTwo'></Loader>
        <Loader variants={loaderVariants} animate='animationThree'></Loader>
      </LoaderContainer>
    </LoadingStyle>
  )
}

export default Loading;
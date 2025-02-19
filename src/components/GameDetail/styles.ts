import { motion } from "framer-motion";
import styled from 'styled-components';

export const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0,0,0,0.5);
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`

export const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  z-index: 10;
  img {
    width: 100%;
  }
`

export const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`

export const Info = styled(motion.div)`
  text-align: center;
`

export const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img{
    margin-left: 3rem;
  }
`

export const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
    /* height: 80vh;
    object-fit: cover; */
  }
`

export const Description = styled(motion.div)`
  margin: 5rem 0rem;
`

export const Gallery = styled(motion.div)`
  
`
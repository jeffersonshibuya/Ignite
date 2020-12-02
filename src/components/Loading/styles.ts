
import { motion } from 'framer-motion'
import styled from 'styled-components'

export const LoadingStyle = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0,0,0,0.6);
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  
`

export const LoaderContainer = styled(motion.p)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 5rem;
  width: 100vw;
  height: 100vh;
`

export const Loader = styled(motion.div)`
  width: 10px;
  height: 10px;
  display: flex;
  align-items: baseline;
  border-radius: 50%;
  background: white;
  margin-left: 0.5rem;
  
`
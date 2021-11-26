import styled from 'styled-components'
import { motion } from 'framer-motion'

export const GalaxyStyle = styled.section`
  color: white;
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  flex-direction: column;
  overflow: hidden;


  @media screen and (min-width: 768px) {
    width: 85%;
    margin: 0 auto;
  }

`

export const Girador = styled.div`
  position: relative;
  margin: 10%;

  > img {
    width: 100%;
    height: auto;
  }

  > div {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  @media screen and (min-width: 768px) {
    width: 80vh;
    margin: 10% auto;
  }
`

export const ItensDescricao = styled(motion.div)`
  transform-origin: top;

  img {
    width: 100%;
  }

  p {
    color: white;
  }
`

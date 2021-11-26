import react, { useRef, useEffect, useState, useCallback } from 'react'
import { motion } from 'framer-motion'


import styled from 'styled-components'

function GalaxyItem({posX, posY, handleClick, conteudo}){
    return (
        <GalaxyItemStyle posX={posX} posY={posY}>
          <motion.button
            whileHover={{scale:1.1}}
          >
                <img 
                    src={conteudo.img} 
                    alt="imagem do site de demonstracao"
                    onClick={() => handleClick(conteudo)}
                />
            </motion.button>
        </GalaxyItemStyle>
    )   

}

const GalaxyItemStyle = styled.div`
    position: absolute;
    width: 10%;

    left: ${({posX}) => posX}%;
    top: ${({posY}) => posY}%;

    > button {
        width: 100%;
        position: relative;
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;

        :after {
            content: "";
            padding-top: 100%;
            display: block;
        }

        > img {
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            border: 5px solid violet;
            object-fit: cover;
            left: 0;
        }    
    }

`

export default GalaxyItem

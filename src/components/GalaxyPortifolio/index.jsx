import React, { useState, useCallback, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'

import galaxia from './Galaxia.svg'

import GalaxyItem from './GalaxyItem.jsx'
import { GalaxyStyle, Girador, ItensDescricao } from './GalaxyStyle.style'

import seed from './seed'

import 'Propeller'

function GalaxyPortifolio() {
  const [itemAberto, setItemAberto] = useState(null)
  const descricaoRef = useRef(null)

  const setGiradorRef = useCallback(node => {
    if(!node){return}

    function handleOnDragEnd(){
      if(Math.abs(this.speed) < 0.5){
        this.speed = this.speed > 0 ? 0.5 : -0.5
        return
      }
      this.inertia = 0.98
      this.movimentado = true;
    }

    function handleOnRotate(){
      const itensPraDesgirar = this.element.children[0].children
      const stringRotacao =  `rotate(${-this.angle}deg)`
      for(const item of itensPraDesgirar){
        item.style.transform = stringRotacao
      }

      if(this.movimentado && Math.abs(this.speed) < 0.5){
        this.inertia = 1
        this.speed = this.speed > 0 ? 0.5 : -0.5
        this.movimentado = false
      }
    }

    const propeller = new window.Propeller(node, {
      inertia: 1,
      onDragStop: handleOnDragEnd,
      onRotate: handleOnRotate,
    })

    const observerOptions = {
      rootMargin: '10%',
      threshold: 0.1
    }

    new IntersectionObserver((entries, observe) => {
      if(entries[0].isIntersecting){
        propeller.speed = 0.5
      } else {
        propeller.speed = 0
      }

    }, observerOptions)
      .observe(node)
  }, [])

  function handleStarClick(conteudo){
    const listaSeed = Object.values(seed)
    const itemEncontrado = listaSeed.find(itemSeed => itemSeed === conteudo)
    toView()
    setItemAberto(itemEncontrado)
  }

  function toView(){
    descricaoRef.current.scrollIntoView({behavior: "smooth"})
  }

  return (
    <GalaxyStyle>
      <Girador ref={setGiradorRef}>
        <div>
        <GalaxyItem posX={10} posY={10} handleClick={handleStarClick} conteudo={seed.clashCards}/>
          <GalaxyItem posX={50} posY={50} handleClick={handleStarClick} conteudo={seed.tonhao}/>
          <GalaxyItem posX={20} posY={20} handleClick={handleStarClick} conteudo={seed.duds}/>
        </div>
        <img draggable={false} src={galaxia} alt="Portifolio Galaxia"/>
      </Girador>
      <div ref={descricaoRef}>
        <AnimatePresence
          exitBeforeEnter={true}
        >
          {itemAberto &&
          <ItensDescricao
            key={itemAberto.img}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1, opacity: 1}}
            exit={{ scaleY: 0, opacity: 0 }}
          >
            <img src={itemAberto.img} alt='portifolio example'/>
            <h2>{itemAberto.titulo}</h2>
            <p>{itemAberto.descricao}</p>
          </ItensDescricao>
          }
        </AnimatePresence>
      </div>
    </GalaxyStyle>
  )
}

export default GalaxyPortifolio


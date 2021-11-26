import React, { useRef, useEffect, useState, useCallback } from 'react'
import styled, { keyframes } from 'styled-components'


function ItensDescricao({img, descricao}){
    return (
        <div></div>
    )
}

export default React.memo(ItensDescricao)

const animcaoEntrada = keyframes`
    from {
        transform: scale(0)
    }

    to {
        transform: scale(100%)
    }
`




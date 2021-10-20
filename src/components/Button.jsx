import React from 'react';

import styled from 'styled-components';

const Button = ({text, type}) => {
    return ( 
        <ButtonStyles>
            <button type={type}>{text}</button>
        </ButtonStyles>
     );
}

const ButtonStyles = styled.div`
    width: 100%;
    text-align: end;

    button {
        padding: .5em 2.5em;
        border: none;
        background-color: #fff;
        color: #000;
        cursor: pointer;
        font-size: 1em;


    }
`;

export default Button;
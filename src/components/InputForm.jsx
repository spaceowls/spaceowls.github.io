import React from 'react';
import styled from 'styled-components';

const InputForm = ({type, placeholder, name}) => {
    return ( 
        <InputStyles>
            <input type= {type} placeholder = {placeholder} name={name} />
        </InputStyles>
     );
}

const InputStyles = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 1.2em;

    input {
        width: 100%;
        border: none;
        height: 2em;
        font-size: 1em;
        outline: none;
    }
`;
 
export default InputForm;
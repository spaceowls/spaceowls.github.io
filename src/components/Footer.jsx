import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return ( 
        <FooterStyles>
            <span>💻  With 💓 By Space Owls</span>
        </FooterStyles>
     );
}

const FooterStyles = styled.footer`
    width: 100%;
    height: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFF;
`;
 
export default Footer;
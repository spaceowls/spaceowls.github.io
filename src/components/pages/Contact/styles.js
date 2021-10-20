import styled from "styled-components";
import bg from '../../../img/bg_contact.svg'

export const ContactStyles = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url(${bg});
  background-size: cover;

  form {
    width: 90%;
    .contact__title {
      h2 {
        color: #fff;
        font-size: 3em;
        font-weight: bold;
      }
    }
  }

  @media screen and (min-width: 768px) {
    background-position: left;
  }
`;

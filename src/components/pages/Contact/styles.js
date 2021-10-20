import styled from "styled-components";
import bg from '../../../img/bg_contact.svg'

export const ContactStyles = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: url(${bg});
  background-size: cover;

  form {
    .contact__title {
      width: 100%;

      h2 {
        color: #fff;
        font-size: 3em;
        font-weight: bold;
      }
    }

    textarea {
        margin-top: 1.2em;
        border: none;
        outline: none;
        margin-bottom: 1em;

        &::placeholder {
            font-size: 1.2em;
            font-weight: 400;
        }
    }

  }
`;

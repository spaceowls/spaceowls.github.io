import styled, { createGlobalStyle } from "styled-components";

export const Reset = createGlobalStyle`

    body {
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,400;0,500;0,600;0,700;0,800;0,900;1,300&display=swap');
        margin: 0;
        padding: 0;
        background: #000000;
        font-family: "Poppins", Helvetica, Sans-Serif;
    }
`;

export const MembersStyles = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .members__title {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1em;

    img {
        width: 3.875em;
        margin-right: 1.1875em;
    }

    h2 {
      color: #fff;
      font-weight: bold;

      span {
        color: #753cd4;
      }
    }
  }

  .members__list {
      width: 100%;
      height: 80vh;
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: column;
  }
`;

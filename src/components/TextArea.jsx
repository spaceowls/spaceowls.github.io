import React from "react";
import styled from "styled-components";

const TextArea = ({ name, id, cols, rows, placeholder }) => {
  return (
    <TextAreaStyles>
      <textarea
        name={name}
        id={id}
        cols={cols}
        rows={rows}
        placeholder={placeholder}
      ></textarea>
    </TextAreaStyles>
  );
};

const TextAreaStyles = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  textarea {
    width: 100%;
    resize: none;
    padding: 0.5em;
    margin-top: 1.2em;
    border: none;
    outline: none;
    margin-bottom: 1em;

    &::placeholder {
      font-size: 1em;
      font-family: "Poppins", sans-serif;
    }
  }
`;

export default TextArea;
